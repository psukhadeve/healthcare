terraform{
      backend "s3" {
    bucket = "healthcare-terraform-state-file"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}