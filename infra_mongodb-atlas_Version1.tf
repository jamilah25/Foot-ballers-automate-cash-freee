provider "mongodbatlas" {
  public_key  = var.mongo_public_key
  private_key = var.mongo_private_key
}

resource "mongodbatlas_cluster" "aviatordb" {
  project_id   = var.mongo_project_id
  name         = "aviatordb"
  provider_name = "AWS"
  region       = "US_EAST_1"
  backing_provider_name = "AWS"
  cluster_type = "REPLICASET"
  disk_size_gb = 20
  mongo_db_major_version = "6.0"
  provider_instance_size_name = "M0"
}