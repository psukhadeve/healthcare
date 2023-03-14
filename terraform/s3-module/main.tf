
terraform{
      backend "s3" {
    bucket = "healthcare-terraform-state-file"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}
module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = var.bucket
  acl    = var.acl
  force_destroy = var.force_destroy
  attach_elb_log_delivery_policy = var.attach_elb_log_delivery_policy  # Required for ALB logs
  attach_lb_log_delivery_policy  = var.attach_lb_log_delivery_policy  # Required for ALB/NLB logs
  block_public_acls       = var.block_public_acls
  block_public_policy     = var.block_public_policy
  ignore_public_acls      = var.ignore_public_acls
  restrict_public_buckets = var.restrict_public_buckets
  attach_policy           = var.attach_policy
  attach_public_policy    = var.attach_public_policy
  versioning = {
    enabled = true
  }
tags = {

    Environment = "dev"
  }
}