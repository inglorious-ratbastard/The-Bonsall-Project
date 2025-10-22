{ pkgs }: {
    deps = [
      pkgs.nodePackages.vscode-langservers-extracted
      pkgs.nodePackages.typescript-language-server
    ];
    idx.previews = {
      enable = true;
      previews = {
        web = {
          command = [
            "npm"
            "run"
            "start"
            "--"
            "--port"
            "$PORT"
            "--host"
            "0.0.0.0"
            "--disable-host-check"
          ];
          manager = "web";
        };
      };
    };
  }
  