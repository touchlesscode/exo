terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  required_version = ">= 0.13"
}

locals {
  namespace_domain       = var.widgets_namespace_domain[var.region]
  split_namespace_domain = split(".", local.namespace_domain)
}

provider "aws" {
  region  = var.region
}

resource "aws_route53_zone" "widgets_exo_skin" {
  name = "widgets.exo.skin"
}

module "subdomain_certificate" {
  source = "../../../../infrastructure/terraform/modules/12/acm_certificate"

  domain  = "*.${local.namespace_domain}"
  zone_id = aws_route53_zone.widgets_statflo_com.zone_id

  tags = merge(
    { "Country" = substr(var.region, 0, 2) },
    { "DataCenter" = substr(var.region, 3, length(var.region) - 5) },
  )
}