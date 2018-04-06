# EOS.IO-Community-Testnet-Reactivation

## Welcome to the EOS.IO Community Testnet

#### Run by:
[EOSIO.SE!](http://eosio.se) 

[EOS42.IO!](https://eos42.io)

[EOSGREEN.IO!](https://eosgreen.io)

[EOSDAC.IO!](https://eosdac.io)

The public community superhero testnet described in this repository is running the dawn-3.x branch.

For official documentation check: https://github.com/EOSIO/eos

The following instructions detail the process of getting the software, building it, running a node for community testnet.

### Clean install Linux

Clone the eos repository and run the build script.

    git clone https://github.com/eosio/eos --recursive
    cd eos
    git checkout DAWN-2018-03-30-ALPHA
    git submodule update --recursive
    ./eosio_build.sh
    cd build
    sudo make install
    
Now you can copy binary files (mainly nodeos,cleos,keosd) located in:

    /usr/local/bin
    
or in local build folders:

    build/programs/

and paste it in a folder dedicated for your node (e.g /etc/eosio/node_00)

### Launching a node on Community Testnet

`nodeos` will need a properly configured config.ini file in order to work properly. You can download it from [here!] (https://github.com/eosgreen/EOS.IO-Community-Testnet-Reactivation).

- Create `data-dir` folder for you node, for example `/etc/eosio/node_00/data-dir`
- Download files `config.ini` and `genesis.json` from git repository [here!] (https://github.com/eosgreen/EOS.IO-Community-Testnet-Reactivation)
- Edit path to `data-dir/genesis.json` file in coonfig.ini
- Choose your producer name (in case you want to produce blocks) and create own EOS key pair (you can create key pair using cleos command `./cleos create key` or using key generator.
- Add you producer name and your keys in your `config.ini`.
- Connect your node to superhero network using `start.sh` script from [here!]( https://github.com/eosgreen/scripts).
- Please inform in telegram channel your node info: Server geographic location, Organisation/Website, node ip/domain, http port, p2p port, producer name, your public key.
- After providing information and node synchronization, let us know in telegram channel to activate your account as BP.


Congratulations - you are up and running as BP on Superhero Testnet!
