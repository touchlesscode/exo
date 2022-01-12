terraform {
  backend "s3" {
    bucket  = "exo-dev-terraform"
    key     = "widgets/generic.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}
