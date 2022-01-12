terraform {
  backend "s3" {
    bucket  = "exo-dev-terraform"
    key     = "widgets.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}

