terraform {
  backend "s3" {
    bucket  = "tf.ca.prod.exo.skin"
    key     = "widgets.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}

