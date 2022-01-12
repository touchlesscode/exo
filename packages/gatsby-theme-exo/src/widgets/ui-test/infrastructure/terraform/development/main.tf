terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  required_version = ">= 1.0.0"
}

provider "aws" {
  region = var.region
}

provider "aws" {
  region = var.region_us
  alias  = "us"
}

locals {
  namespace_domain = lookup(var.namespace_domain, var.region)

  stage_namespace = substr(
  local.namespace_domain,
  0,
  length(local.namespace_domain) - length(var.cluster_domain) + 1,
  )

  domain          = format("%s.%s", var.name, local.namespace_domain)
}

data "aws_route53_zone" "parent_zone" {
  name         = var.cluster_domain
  private_zone = false
}

module "certificate" {
  source = "../../../../../infrastructure/terraform/modules/12/acm_certificate"
  providers = {
    aws = aws.us # CloudFront certificate must be in us-east-1 region.
  }

  zone_id         = data.aws_route53_zone.parent_zone.zone_id
  domain          = local.domain
  alternate_names = []

  tags = merge(
  {
    "Country" = substr(var.region_us, 0, 2)
  },
  {
    "DataCenter" = substr(var.region_us, 3, length(var.region_us) - 5)
  },
  )
}


module "website" {
  source = "git::https://github.com/cloudposse/terraform-aws-s3-website.git?ref=0.15.7"

  enabled              = true
  delimiter            = "."
  namespace            = local.namespace_domain
  name                 = var.name
  hostname             = local.domain
  versioning_enabled   = "true"
  cors_allowed_methods = tolist(["GET", "HEAD"])
  index_document       = "index.html"
  error_document       = "index.html"
  deployment_arns      = {}

  tags = merge(
  {
    "Country" = substr(var.region, 0, 2)
  },
  {
    "DataCenter" = substr(var.region, 3, length(var.region) - 5)
  },
  )
}

module "cdn" {
  source = "git::https://github.com/cloudposse/terraform-aws-cloudfront-cdn.git?ref=0.20.0"

  enabled                         = true
  logging_enabled                 = false
  delimiter                       = "."
  namespace                       = local.namespace_domain
  name                            = local.domain
  origin_domain_name              = module.website.s3_bucket_domain_name
  price_class                     = "PriceClass_All"
  aliases                         = [local.domain]
  dns_aliases_enabled             = "true"
  parent_zone_id                  = data.aws_route53_zone.parent_zone.zone_id
  acm_certificate_arn             = module.certificate.arn
  origin_protocol_policy          = "http-only"
  viewer_protocol_policy          = "redirect-to-https"
  viewer_minimum_protocol_version = "TLSv1.1_2016"
  default_root_object             = "index.html"
  allowed_methods                 = tolist(["GET", "HEAD", "OPTIONS"])
  cached_methods                  = tolist(["GET", "HEAD", "OPTIONS"])
  custom_error_response = [
    {
      error_code            = 400
      error_caching_min_ttl = 300
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_code            = 404
      error_caching_min_ttl = 300
      response_code         = 200
      response_page_path    = "/index.html"
    },
  ]

  tags = merge(
  {
    "Country" = substr(var.region, 0, 2)
  },
  {
    "DataCenter" = substr(var.region, 3, length(var.region) - 5)
  },
  )
}