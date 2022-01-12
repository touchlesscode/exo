terraform {
  backend "s3" {
    bucket  = "statflo-dev-terraform"
    key     = "widgets/ui-test.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}
