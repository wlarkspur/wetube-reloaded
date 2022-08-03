{ pkgs }: {
	deps = [
		pkgs.mongoose.bin
  pkgs.mmh
  pkgs.mongodb-3_4
  pkgs.openssh_with_kerberos
  pkgs.gh
  pkgs.sudo
  pkgs.run
pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}