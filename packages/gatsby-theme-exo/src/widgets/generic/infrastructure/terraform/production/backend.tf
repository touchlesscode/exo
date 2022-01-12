terraform {
  backend "s3" {
    bucket  = "tf.ca.prod.exo.skin"
    key     = "widgets/generic.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}
