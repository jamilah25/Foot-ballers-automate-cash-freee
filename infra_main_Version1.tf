provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "backend" {
  ami           = "ami-0c94855ba95c71c99" # Ubuntu
  instance_type = "t3.micro"
  tags = {
    Name = "AviatorBackendServer"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install -y docker.io",
      "sudo docker run -d -p 3000:3000 yourdockerhub/aviator-game-backend:latest"
    ]
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("~/.ssh/id_rsa")
    host        = self.public_ip
  }
}

resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "aviator-game-frontend"
  acl    = "public-read"
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}