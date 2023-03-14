variable bucket {
  type        = string
  default     = ""
  description = "The name of the bucket. If omitted, Terraform will assign a random, unique name."
}
variable acl {
  type        = string
  default     = ""
  description = " The canned ACL to apply. Conflicts with grant"
}
variable force_destroy {
  type        = bool
  default     = null
  description = "A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are not recoverable."
}
variable attach_elb_log_delivery_policy {
  type        = bool
  default     = null
  description = "Controls if S3 bucket should have ELB log delivery policy attached	"
}
variable attach_lb_log_delivery_policy {
  type        = bool
  default     = null
  description = "Controls if S3 bucket should have ALB/NLB log delivery policy attached	"
}
variable  block_public_acls {
  type        = bool
  default     = null
  description = "deWhether Amazon S3 should block public ACLs for this bucket.scription"
}

variable ignore_public_acls   {
  type        = bool
  default     = null
  description = "deWhether Amazon S3 should ignore public ACLs for this bucket"
}
variable restrict_public_buckets {
  type        = bool
    default     = null
  description = "Whether Amazon S3 should restrict public bucket policies for this bucket"
}
variable attach_policy  {
  type        = bool
  default     = null
  description = "Controls if S3 bucket should have bucket policy attached (set to true to use value of"
}
variable attach_public_policy  {
  type        = bool
  default     = null
  description = "Controls if a user defined public bucket policy will be attached (set to false to allow upstream to apply defaults to the bucket)"
}

variable block_public_policy {
  type        = bool
  default     = null
  description = "Whether Amazon S3 should block public bucket policies for this bucket.	"
}








