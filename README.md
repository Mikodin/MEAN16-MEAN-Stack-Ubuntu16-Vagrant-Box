#MEAN16 - MEAN Stack Ubuntu16 Vagrant Box
=========
A preconfigured VM set up for MEAN stack development (or whatever else you have in mind)
For installing Vagrant see https://www.vagrantup.com/docs/installation/index.html

For Vagrant info/docs see http://www.vagrantup.com/ 

To get started clone the repo

```Shell
vagrant up
```

#### SSH into the VM
```Shell
vagrant ssh
```

#### Navigate to the shared folder
```Shell
cd /vagrant
```

#### Clean VM Shutdown
```Shell
vagrant halt
```

#### Destroy the VM
```Shell
vagrant destroy
```

## MongoDB Commands
=========
#### Start MongoDB
```Shell
sudo service mongodb start
```

#### Stop MongoDB
```Shell
sudo service mongodb stop
```

#### Restart MongoDB
```Shell
sudo service mongodb restart
```
