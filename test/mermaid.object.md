# Merkle Mermaid Object
# Tree
```
{
  "root": "_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y",
  "paths": [
    "R.pciCJqqefE0tMRHMvBLzkqpDFaJh3VwoNxHaa7QDbfs~R.eX7WGq8vtwdIVf2Lx58lSNSRGd6m3GGC0qIKCzBCcZM~R.oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ",
    "L.B578USAhSWeh7OB1b02pTQA8jlEJVKpCKrsMuKkVgDM~R.eX7WGq8vtwdIVf2Lx58lSNSRGd6m3GGC0qIKCzBCcZM~R.oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ",
    "R.YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs~L.1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM~R.oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ",
    "L.ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY~L.1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM~R.oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ",
    "R.ZCe4exZwVMPfdWpSvuoAutu1UIABUvSa7vM7nAwa5h4~R.ymgzM-AaNOIiJ_U_hfPmcD8W19iTJoKhU1D71wJonXs~L.J_R8UsFrhydO_FMCDSM6HYl7AycNw4Z3gTAOYRA4C1Q",
    "L.iXvw0qV1d2tMiN8_7Btkbiufs_VDzR56BBV5GtwA3rc~R.ymgzM-AaNOIiJ_U_hfPmcD8W19iTJoKhU1D71wJonXs~L.J_R8UsFrhydO_FMCDSM6HYl7AycNw4Z3gTAOYRA4C1Q",
    "R.ICy2ade6u7B_ckUNGDKam7NvRYnBy0-ixCzzW41bous~L.ejZAcfEB2t5sJab2288ELQ0aPugmjTRsd4ZgAaNUR08~L.J_R8UsFrhydO_FMCDSM6HYl7AycNw4Z3gTAOYRA4C1Q",
    "L.Uqoj5mowSWBXmIliElD7-UXfsyMCKCqeCk53BWshQ64~L.ejZAcfEB2t5sJab2288ELQ0aPugmjTRsd4ZgAaNUR08~L.J_R8UsFrhydO_FMCDSM6HYl7AycNw4Z3gTAOYRA4C1Q"
  ],
  "leaves": [
    "B578USAhSWeh7OB1b02pTQA8jlEJVKpCKrsMuKkVgDM",
    "pciCJqqefE0tMRHMvBLzkqpDFaJh3VwoNxHaa7QDbfs",
    "ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY",
    "YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs",
    "iXvw0qV1d2tMiN8_7Btkbiufs_VDzR56BBV5GtwA3rc",
    "ZCe4exZwVMPfdWpSvuoAutu1UIABUvSa7vM7nAwa5h4",
    "Uqoj5mowSWBXmIliElD7-UXfsyMCKCqeCk53BWshQ64",
    "ICy2ade6u7B_ckUNGDKam7NvRYnBy0-ixCzzW41bous"
  ],
  "salts": [
    "WpNu4ZoM88cNjLAAYRG3pS9F7AFwPgr4zcjG2BrFhQw",
    "kekkD0FSI5gu3DRVMmMHEOlKf1LNX0j17hr8VVB48Ks",
    "hymMwvMfunMYHqKp5u8Q3OIe2V6YvaycThUE6hb0huQ",
    "R-pwzwiHK9tK-tNDKwHZY6x9Fl9rV1zXLvR0mPRFmpA",
    "42GlenQGre5lPx3P9mDYTwyjApB3R68qOH9nghrPzjM",
    "jf6C2acq2DHkjlJKOK0RHyBu8Iw5qlhH2ybfA07jtX0",
    "GWNzMQgnZpy1j0xojrJ6q8QOYA3JhhW9Mp9BCrdDDP8",
    "XZ2tFnCTciAJCO7LamdUG6QBO_dJDMtA2LdYMqG0rKA"
  ]
}
```
```mermaid
%%{
  init: {
    'flowchart': { 'curve': 'monotoneX' },
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#2a2d4c',
      'primaryTextColor': '#565a7c',
      'nodeBorder': '#565a7c',
      'edgeLabelBackground': '#2a2d4c',
      'clusterBkg': '#2a2d4c',
      'clusterBorder': '#2a2d4c',
      'lineColor': '#565a7c',
      'fontFamily': 'monospace',
      'darkmode': true
    }
  }
}%%
%% Support https://transmute.industries
graph LR
	subgraph Merkle Tree
		direction LR
		fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796("_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y") 
		079efc5120214967a1ece0756f4da94d003c8e510954aa422abb0cb8a9158033("B578USAhSWeh7OB1b02pTQA8jlEJVKpCKrsMuKkVgDM") 
		a5c88226aa9e7c4d2d3111ccbc12f392aa4315a261dd5c283711da6bb4036dfb("pciCJqqefE0tMRHMvBLzkqpDFaJh3VwoNxHaa7QDbfs") 
		797ed61aaf2fb7074855fd8bc79f2548d49119dea6dc6182d2a20a0b30427193("eX7WGq8vtwdIVf2Lx58lSNSRGd6m3GGC0qIKCzBCcZM") 
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854("oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ") 
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6("ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3("1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM") 
		897bf0d2a575776b4c88df3fec1b646e2b9fb3f543cd1e7a0415791adc00deb7("iXvw0qV1d2tMiN8_7Btkbiufs_VDzR56BBV5GtwA3rc") 
		6427b87b167054c3df756a52beea00badbb550800152f49aeef33b9c0c1ae61e("ZCe4exZwVMPfdWpSvuoAutu1UIABUvSa7vM7nAwa5h4") 
		ca683333e01a34e22227f53f85f3e6703f16d7d8932682a15350fbd702689d7b("ymgzM-AaNOIiJ_U_hfPmcD8W19iTJoKhU1D71wJonXs") 
		27f47c52c16b87274efc53020d233a1d897b03270dc3867781300e6110380b54("J_R8UsFrhydO_FMCDSM6HYl7AycNw4Z3gTAOYRA4C1Q") 
		52aa23e66a304960579889621250fbf945dfb32302282a9e0a4e77056b2143ae("Uqoj5mowSWBXmIliElD7-UXfsyMCKCqeCk53BWshQ64") 
		202cb669d7babbb07f72450d18329a9bb36f4589c1cb4fa2c42cf35b8d5ba2eb("ICy2ade6u7B_ckUNGDKam7NvRYnBy0-ixCzzW41bous") 
		7a364071f101dade6c25a6f6dbcf042d0d1a3ee8268d346c77866001a354474f("ejZAcfEB2t5sJab2288ELQ0aPugmjTRsd4ZgAaNUR08") 
		079efc5120214967a1ece0756f4da94d003c8e510954aa422abb0cb8a9158033 -- right --> a5c88226aa9e7c4d2d3111ccbc12f392aa4315a261dd5c283711da6bb4036dfb
		a5c88226aa9e7c4d2d3111ccbc12f392aa4315a261dd5c283711da6bb4036dfb -- right --> 797ed61aaf2fb7074855fd8bc79f2548d49119dea6dc6182d2a20a0b30427193
		797ed61aaf2fb7074855fd8bc79f2548d49119dea6dc6182d2a20a0b30427193 -- right --> a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 -- proof --> fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 -- right --> 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b -- left --> d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 -- right --> a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854
		897bf0d2a575776b4c88df3fec1b646e2b9fb3f543cd1e7a0415791adc00deb7 -- right --> 6427b87b167054c3df756a52beea00badbb550800152f49aeef33b9c0c1ae61e
		6427b87b167054c3df756a52beea00badbb550800152f49aeef33b9c0c1ae61e -- right --> ca683333e01a34e22227f53f85f3e6703f16d7d8932682a15350fbd702689d7b
		ca683333e01a34e22227f53f85f3e6703f16d7d8932682a15350fbd702689d7b -- left --> 27f47c52c16b87274efc53020d233a1d897b03270dc3867781300e6110380b54
		27f47c52c16b87274efc53020d233a1d897b03270dc3867781300e6110380b54 -- proof --> fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796
		52aa23e66a304960579889621250fbf945dfb32302282a9e0a4e77056b2143ae -- right --> 202cb669d7babbb07f72450d18329a9bb36f4589c1cb4fa2c42cf35b8d5ba2eb
		202cb669d7babbb07f72450d18329a9bb36f4589c1cb4fa2c42cf35b8d5ba2eb -- left --> 7a364071f101dade6c25a6f6dbcf042d0d1a3ee8268d346c77866001a354474f
		7a364071f101dade6c25a6f6dbcf042d0d1a3ee8268d346c77866001a354474f -- left --> 27f47c52c16b87274efc53020d233a1d897b03270dc3867781300e6110380b54
	end
```
# Proof
```
{
  "root": "_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y",
  "paths": [
    "L.ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY~L.1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM~R.oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ"
  ],
  "leaves": [
    "YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs"
  ],
  "salts": [
    "R-pwzwiHK9tK-tNDKwHZY6x9Fl9rV1zXLvR0mPRFmpA"
  ]
}
```
```mermaid
%%{
  init: {
    'flowchart': { 'curve': 'monotoneX' },
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#2a2d4c',
      'primaryTextColor': '#565a7c',
      'nodeBorder': '#565a7c',
      'edgeLabelBackground': '#2a2d4c',
      'clusterBkg': '#2a2d4c',
      'clusterBorder': '#2a2d4c',
      'lineColor': '#565a7c',
      'fontFamily': 'monospace',
      'darkmode': true
    }
  }
}%%
%% Support https://transmute.industries
graph LR
	subgraph Merkle Tree
		direction LR
		fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796("_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6("ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY") 
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3("1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM") 
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854("oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b -- left --> 7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 -- left --> d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 -- right --> a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 -- proof --> fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796
	end
```
# Tree with Member
```mermaid
%%{
  init: {
    'flowchart': { 'curve': 'monotoneX' },
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#2a2d4c',
      'primaryTextColor': '#565a7c',
      'nodeBorder': '#565a7c',
      'edgeLabelBackground': '#2a2d4c',
      'clusterBkg': '#2a2d4c',
      'clusterBorder': '#2a2d4c',
      'lineColor': '#565a7c',
      'fontFamily': 'monospace',
      'darkmode': true
    }
  }
}%%
%% Support https://transmute.industries
graph LR
	subgraph Merkle Tree
		direction LR
		fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796("_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6("ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY") 
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3("1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM") 
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854("oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b -- left --> 7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 -- left --> d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 -- right --> a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 -- proof --> fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796
	end
	subgraph Merkle Leaf
		direction LR
		33("Mw...") 
		47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90("R-pwzwiHK9tK-tNDKwHZY6x9Fl9rV1zXLvR0mPRFmpA") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		33 -- member --> 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b
		47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90 -- salt --> 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b
	end
%% Merkle Tree
style fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796 color:#fff, fill: #594aa8, stroke:#27225b, stroke-width: 2.0px
style 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style 7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
linkStyle 0 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 1 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 2 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 3 color:#fcb373, stroke:#8286a3, stroke-width: 2.0px 
%% Merkle Leaf
style 33 color:#ff605d, stroke:#ff605d, stroke-width: 2.0px
style 47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90 color:#fcb373, stroke:#fcb373, stroke-width: 2.0px
style 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b color:#fff, fill: #594aa8, stroke:#27225b, stroke-width: 2.0px
linkStyle 4 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 5 color:#fcb373, stroke:#8286a3, stroke-width: 2.0px 
```
# Proof with Member
```mermaid
%%{
  init: {
    'flowchart': { 'curve': 'monotoneX' },
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#2a2d4c',
      'primaryTextColor': '#565a7c',
      'nodeBorder': '#565a7c',
      'edgeLabelBackground': '#2a2d4c',
      'clusterBkg': '#2a2d4c',
      'clusterBorder': '#2a2d4c',
      'lineColor': '#565a7c',
      'fontFamily': 'monospace',
      'darkmode': true
    }
  }
}%%
%% Support https://transmute.industries
graph LR
	subgraph Merkle Tree
		direction LR
		fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796("_O7ZptDk-KKRBMb5IChJLNvbspr1Pyo3GsUTjdEpZ5Y") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6("ewLQJ-MF4W9Qegf7vAv9vb573djdvUFz2Y4FmBnc7KY") 
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3("1z8VtbsA1IlT9I3aUA3iDA4idPjLUuMNbUFO2qU7AqM") 
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854("oQtWuqlYedaQf0HaYrsfftMb7O6GtMO8SNpTSF1wKFQ") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b -- left --> 7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6
		7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 -- left --> d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3
		d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 -- right --> a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854
		a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 -- proof --> fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796
	end
	subgraph Merkle Leaf
		direction LR
		33("Mw...") 
		47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90("R-pwzwiHK9tK-tNDKwHZY6x9Fl9rV1zXLvR0mPRFmpA") 
		60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b("YMsWof5deBcACWaDH51SaAPuvetpCV4Wv0npthB9KQs") 
		33 -- member --> 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b
		47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90 -- salt --> 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b
	end
%% Merkle Tree
style fceed9a6d0e4f8a29104c6f92028492cdbdbb29af53f2a371ac5138dd1296796 color:#fff, fill: #594aa8, stroke:#27225b, stroke-width: 2.0px
style 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style 7b02d027e305e16f507a07fbbc0bfdbdbe7bddd8ddbd4173d98e059819dceca6 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style d73f15b5bb00d48953f48dda500de20c0e2274f8cb52e30d6d414edaa53b02a3 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
style a10b56baa95879d6907f41da62bb1f7ed31becee86b4c3bc48da53485d702854 color:#8286a3, stroke:#8286a3, stroke-width: 2.0px
linkStyle 0 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 1 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 2 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 3 color:#fcb373, stroke:#8286a3, stroke-width: 2.0px 
%% Merkle Leaf
style 33 color:#ff605d, stroke:#ff605d, stroke-width: 2.0px
style 47ea70cf08872bdb4afad3432b01d963ac7d165f6b575cd72ef47498f4459a90 color:#fcb373, stroke:#fcb373, stroke-width: 2.0px
style 60cb16a1fe5d7817000966831f9d526803eebdeb69095e16bf49e9b6107d290b color:#fff, fill: #594aa8, stroke:#27225b, stroke-width: 2.0px
linkStyle 4 color:#ff605d, stroke:#8286a3, stroke-width: 2.0px 
linkStyle 5 color:#fcb373, stroke:#8286a3, stroke-width: 2.0px 
```
