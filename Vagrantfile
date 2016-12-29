Vagrant.configure("2") do |config|

  config.vm.box = "bento/ubuntu-16.10"
  config.vm.network :forwarded_port, guest: 8081, host: 8081 
  config.vm.network :forwarded_port, guest: 27017, host: 27017 

  config.ssh.username = 'vagrant'
  config.ssh.password = 'vagrant'

  config.vm.synced_folder '.', '/vagrant'

  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    # max 75% CPU cap
    v.customize ["modifyvm", :id, "--cpuexecutioncap", "75"]
    # 2GB ram
    v.memory = 2048
    v.customize ["setextradata", :id, 
                 "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant","1"]
  end

end
