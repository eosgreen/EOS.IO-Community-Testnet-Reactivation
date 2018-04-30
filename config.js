/**********************************************
*
* CryptoLions.io
* https://github.com/CryptoLions/EOS-Testnet-monitor
*
***********************************************/
var _reqInterval = 500;

var blockProducerList = [
  {
    "bp_name": "juggernaut",
    "organisation": "EOSgreen.io",
    "location": "UK",
    "node_addr": "eosgreen.uk.to",
    "port_http": "8889",
    "port_ssl": "",
    "port_p2p": "9875",
    "block_signing_key": "EOS8LAhzKRo5HiaR83tP8AaYHogQAKq8L8GKNm9eSi9nj6ze6cEzC"
  },
  {
    "bp_name": "storm",
    "organisation": "EOSIO.se",
    "location": "Vasteras, Sweden",
    "node_addr": "ctestnet.edenx.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "62071",
    "block_signing_key": "EOS55xgWhiYohaHtFTxcPMorB9MzwBfe3JgUuQEujrurmHLHiXmna"
  },
  {
    "bp_name": "batman",
    "organisation": "eosDAC.io",
    "location": "Ireland",
    "node_addr": "54.194.49.21",
    "port_http": "8833",
    "port_ssl": "",
    "port_p2p": "9875",
    "block_signing_key": "EOS5wEcKNZ8YdVnCSCnGmwpWLwb2cCqP5FSyWoW1vBASr78KKu8G3"
  },
  {
    "bp_name": "tom",
    "organisation": "CryptoLions.Io",
    "location": "Ukraine",
    "node_addr": "superhero.cryptolions.io",
    "port_http": "8897",
    "port_ssl": "",
    "port_p2p": "9885",
    "block_signing_key": "EOS5DLvsuc8fmbgn2vQJDhd7ghgRyWuAPmjDaJ7SRagKV5rqDS1ph"
  },
  {
    "bp_name": "venom",
    "organisation": "EOS Cafe",
    "location": "Canada, Calgary",
    "node_addr": "venom.eoscalgary.com",
    "port_http": "80",
    "port_ssl": "",
    "port_p2p": "9877",
    "block_signing_key": "EOS5Xi3QA8rtbrzLFgma7azYigMxFoGYij2j7ZmjwXjmnHrtAbkGk"
  },
  {
    "bp_name": "joker",
    "organisation": "RoelandP.nl/eos",
    "location": "Amsterdam and Germany",
    "node_addr": "joker.superhero.eos.roelandp.nl",
    "port_http": "8763",
    "port_ssl": "",
    "port_p2p": "9873",
    "block_signing_key": "EOS5a37GWFxp74YGGDr6oFRoFjGrtvdYk8vbyid2JQ9EBBSSLzbNz"

  },
  {
    "bp_name": "hellboy",
    "organisation": "EOS Detroit",
    "location": "US,Seattle",
    "node_addr": "ctestnet.eosdetroit.com",
    "port_http": "8889",
    "port_ssl": "",
    "port_p2p": "1339",
    "block_signing_key": "EOS75pHe7xQGQZEjXGd8yCDomKV3whFYr5idz9JmAVHST7t67H3gg"
  },
  {
    "bp_name": "cyclops",
    "organisation": "EOS42",
    "location": "UK,London",
    "node_addr": "bp7-d3.eos42.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS7HCLs7UkXJhjvzm9nu7RzMbPU99HhDqZdbt3a86CGV2uDqAQW5"
  },
  {
    "bp_name": "wakanda",
    "organisation": "EOS Africa",
    "location": "South Africa,Johannesburg",
    "node_addr": "superheroes.eosio.africa",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS6p2RxAzMD8QuVEr75bnvJk3XDrZVYUkyEiuTSj3Qhyp2vWmfFD"
  },
  {
    "bp_name": "wakanda2",
    "organisation": "EOS Africa",
    "location": "Africa",
    "node_addr": "156.38.160.91",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS6p2RxAzMD8QuVEr75bnvJk3XDrZVYUkyEiuTSj3Qhyp2vWmfFD"
  },
  {
    "bp_name": "spiderman",
    "organisation": "SaltBlock",
    "location": "USA,UT,Salt Lake City",
    "node_addr": "166.70.202.194",
    "port_http": "8080",
    "port_ssl": "",
    "port_p2p": "9877",
    "block_signing_key": "EOS8dzxm4HAk8uRJawAWzAJZ6nj4uBCx3bbjBFxzzskHpQhSRELe7"
  },
  {
    "bp_name": "jigsaw",
    "organisation": "Blockpro",
    "location": "USA, Ohio",
    "node_addr": "18.188.52.250",
    "port_http": "8899",
    "port_ssl": "",
    "port_p2p": "9889",
    "block_signing_key": "EOS5AJLcPVhq9zgHvTKgdWd76R943cuUUybpYt7JdrT5BV4T9je12"
  },
  {
    "bp_name": "ironman",
    "organisation": "EOS New York",
    "location": "USA, Virgina",
    "node_addr": "ctest.eosnewyork.io",
    "port_http": "8887",
    "port_ssl": "",
    "port_p2p": "9870",
    "block_signing_key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
  },
  {
    "bp_name": "hook",
    "organisation": "EOS Denmark",
    "location": "Belgium",
    "node_addr": "35.195.161.56",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": ""
  },
  {
    "bp_name": "robin",
    "organisation": "OracleChain",
    "location": "Singapore",
    "node_addr": "159.89.197.162",
    "port_http": "8889",
    "port_ssl": "",
    "port_p2p": "9877",
    "block_signing_key": "EOS7jtFqvghBxvs6EvaQyWWf9vxdmWtTetACiy8PXqxtxXGrHfGVr"
  },
  {
    "bp_name": "rogue",
    "organisation": "Tokenika",
    "location": "Poland",
    "node_addr": "dawn3-seed.tokenika.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS711cqTKFYXXk5nGPgySUy6U34CNBhCcCwaD2PwZ14GJXu1Anwt"
  },
  {
    "bp_name": "daredevil",
    "organisation": "Blockgenic",
    "location": "USA, West Coast",
    "node_addr": "bp.blockgenic.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS7ggmHeJpysDVBHahjHr3Rq46eGxJx9wtbTsmPEvJcGSfMic1uf"
  },
  {
    "bp_name": "magneto",
    "organisation": "EOS Gravity",
    "location": "China",
    "node_addr": "47.52.18.70",
    "port_http": "9000",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS5D5P25LN3pkMsvRJ1a8vYh9CFd2u4MHLSmfcYnugvTEcN38vPm"
  },
  {
    "bp_name": "doom",
    "organisation": "91EOS",
    "location": "China",
    "node_addr": "120.27.130.60",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8NnpE3hVrBdE6JhaMQdxSYAdZqR9qRyg5o3XrEDhCeB6mwBtYr"
  },
  {
    "bp_name": "megatron",
    "organisation": "koreos_io",
    "location": "South Korea",
    "node_addr": "ctest.koreos.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS81LJmHkomMihCyrZ3W5btVqNkiLg7zvYEdKF516UNwBCN2eAN4"
  },
  {
    "bp_name": "superman",
    "organisation": "OCI",
    "location": "USA,St. Louis",
    "node_addr": "ctestnet.objectcomputing.com",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8kJXy2zWbyrmKA8DXg7ubQMjpuDUQKjdpc39SmbeKqjkCi8SXa"
  },
  {
    "bp_name": "beast",
    "organisation": "EOSYS",
    "location": "Korea,Seoul",
    "node_addr": "test.eosys.io",
    "port_http": "8887",
    "port_ssl": "",
    "port_p2p": "9875",
    "block_signing_key": "EOS4yQ8XcxcGY7ixCsMJB9JmFyrdJGPv3kneo53mB5uK6eNmVnw46"
  },
  {
    "bp_name": "stealth",
    "organisation": "EOS Asia",
    "location": "Korea,Seoul",
    "node_addr": "bp-test.eosasia.one",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8RszJfhBhg61PC1Bg7ZK64L9HNMhxi7fqnBoDbBtUaUYSvSJac"
  },
  {
    "bp_name": "mystique",
    "organisation": "helloEOS",
    "location": "China",
    "node_addr": "138.68.15.85",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS85oHiiwVpmGKL5LBxLYm8xgFSCxMFBGDdJgYjt7yFkEUtwbopf"
  },
  {
    "bp_name": "rita",
    "organisation": "EOSGeek",
    "location": "Singapore",
    "node_addr": "47.88.222.80",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS6abC4L9KHzeHMvNuoEBseJnqbFxPjdt9628vfr4gK465tnQPBJ"
  },
  {
    "bp_name": "riddler",
    "organisation": "EOS Rio",
    "location": "Brazil,Rio de Janeiro",
    "node_addr": "54.233.222.22",
    "port_http": "8887",
    "port_ssl": "",
    "port_p2p": "9875",
    "block_signing_key": "EOS67vheXu9HAuqGK5YvYVXmcY83Ac5972GpZmE4WS9FmJAWSjvZG"
  },
  {
    "bp_name": "ursula",
    "organisation": "SuperONE.io",
    "location": "China",
    "node_addr": "39.108.231.157",
    "port_http": "8899",
    "port_ssl": "",
    "port_p2p": "9877",
    "block_signing_key": "EOS6hxModmy1ohpVhQ578xcvCZW78Xb8RK6P5iCwMzNzUuXCA86Y1"
  },
  {
    "bp_name": "aquaman",
    "organisation": "EOShenzhen",
    "location": "China,ShenZhen",
    "node_addr": "ctestnet.eoshenzhen.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS64Vgd3PVJfoTvB19K8fShiy9e1ZGo1iN33PgLrJfUDeTXSmSuG"
  },
  {
    "bp_name": "elektra",
    "organisation": "enjoyshare",
    "location": "China,ShenZhen",
    "node_addr": "eosbp.enjoyshare.net",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS78M4WBz48hUfwQ14yceBvaS4xZGDyaoyGM3bsLxggzvPHHcAC"
  },
  {
    "bp_name": "skeletor",
    "organisation": "EOSBIXIN",
    "location": "Thailand,Bangkok",
    "node_addr": "bpt1.eosbixin.com",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS5DYrhVScCWEGiJJur2iYAhqxnUxWwgzYHjoBVoTRHomPUCUMRZ"
  },
  {
    "bp_name": "gargamel",
    "organisation": "www.bitcoineos.fun",
    "location": "Spain",
    "node_addr": "46.4.253.242",
    "port_http": "7615",
    "port_ssl": "",
    "port_p2p": "7610",
    "block_signing_key": "EOS8XtxmodhhtNizaJiRtc9941KFHxiHbG5sKTby8jW6cxFiXZDLe"
  },
  {
    "bp_name": "hulk",
    "organisation": "EOSphere",
    "location": "Australia,Perth",
    "node_addr": "superhero-bp1.eosphere.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8Zj999MDCzMo1gDuyieFCMMsHKyfPxUB4towsmbjXXQShsFA5a"
  },
  {
    "bp_name": "xavier",
    "organisation": "EOSBR",
    "location": "USA, CA",
    "node_addr": "138.68.238.129",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9875",
    "block_signing_key": "EOS6okFXLDor3y83hmPAbePAgpur5ATyKVuS7fxMSgSm2xs1SZTwT"
  },
  {
    "bp_name": "batgirl",
    "organisation": "EOS Novosibirsk",
    "location": "Russia, Novosibirsk",
    "node_addr": "178.49.174.48",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8bvNf6GZeJRV3a62jU4vTL6MtQ9o3byFdS93jifMYj2CaaFvaV"
  },
  {
    "bp_name": "spaceghost",
    "organisation": "Worbil",
    "location": "USA, Ohio",
    "node_addr": "superhero.worbli.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS6NwJ63CcMKdG4qwa4Nc3qoW2PmartGbizCGrG9tTWyQVfWwKUG"
  },
  {
    "bp_name": "wonderwoman",
    "organisation": "EOSREAL",
    "location": "India,Mumbai-AWS",
    "node_addr": "wonderwoman.eosreal.io",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
  },
  {
    "bp_name": "phoenix",
    "organisation": "EOSBrazil",
    "location": "Brazil,Joinville",
    "node_addr": "eosbrazil.com",
    "port_http": "8891",
    "port_ssl": "",
    "port_p2p": "9878",
    "block_signing_key": "EOS62ZdqFkz4yWhdF3vE2AzMLDSRgEqSfLm5NESkabGY6V4HQ8PkB"
  },
  {
    "bp_name": "loki",
    "organisation": "spear.fund",
    "location": "Ohio,Dayton",
    "node_addr": "35.202.41.160",
    "port_http": "8888",
    "port_ssl": "",
    "port_p2p": "9876",
    "block_signing_key": "EOS8kPE11KY4jBHNEPUnhDfdGwmpZT68YjtjtdRcNnKJjN2b7R1KQ"
  }

]

