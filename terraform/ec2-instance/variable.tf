variable "name" {
  type        = string
  default     = ""
  description = "description"
}
/*variable region {
  type        = string
  default     = ""
  description = "name of region"
}*/

variable "ami" {
  type        = string
  default     = ""
  description = "ID of AMI to use for the instance"
}
variable "instance_type" {
  type        = string
  default     = ""
  description = "The type of instance to start"
}
variable "key_name" {
  type        = string
  default     = ""
  description = "Key name of the Key Pair to use for the instance; which can be managed using the aws_key_pair resource"
}

variable "monitoring" {
  type        = bool
  default     = null
  description = "If true, the launched EC2 instance will have detailed monitoring enabled	"
}

variable "vpc_security_group_ids" {
  type        = list(string)
  default     = null
  description = "A list of security group IDs to associate with"
}
variable "subnet_id" {
  type        = string
  default     = null
  description = "The VPC Subnet ID to launch in"
}

variable associate_public_ip_address  {
  type        = bool
  default     = null
  description = "Whether to associate a public IP address with an instance in a VPC"
}
