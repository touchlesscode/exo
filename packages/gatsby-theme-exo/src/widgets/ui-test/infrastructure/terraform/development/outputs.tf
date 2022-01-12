output "distribution_id" {
  value = module.cdn.cf_id
}

output "bucket_domain_name" {
  value = module.website.s3_bucket_domain_name
}

output "bucket_hostname" {
  value = module.website.hostname
}

output "region" {
  value = var.region
}

