---
layout: post
title: "Publications"
excerpt: "Details of the Peer reviewed Publications"
categories: [paragraph]
comments: false
---

Publications
============


### A first look at browser-based Cryptojacking

_IEEE SECURITY & PRIVACY ON THE BLOCKCHAIN (IEEE S&B) 2018 University College London (UCL), London, UK_  

> In this paper, we examine the recent trend towards in-browser mining of cryptocurrencies; in particular, the mining of Monero through Coinhive and similar code- bases. In this model, a user visiting a website will download a JavaScript code that executes client-side in her browser, mines a cryptocurrency, typically without her consent or knowledge, and pays out the seigniorage to the website. Websites may consciously employ this as an alternative or to supplement advertisement revenue, may offer premium content in exchange for mining, or may be unwittingly serving the code as a result of a breach (in which case the seigniorage is collected by the attacker). The cryptocurrency Monero is preferred seemingly for its unfriendliness to large-scale ASIC mining that would drive browser-based efforts out of the market, as well as for its purported privacy features. In this paper, we survey this landscape, conduct some measurements to establish its prevalence and profitability, outline an ethical framework for considering whether it should be classified as an attack or business opportunity, and make suggestions for the detection, mitigation and/or prevention of browser-based mining for non- consenting users.

[GitHub](https://github.com/shayanb/cryptojacking-first-paper )   [Paper](https://arxiv.org/abs/1803.02887 )   [Slides](https://github.com/shayanb/cryptojacking-first-paper/blob/master/Presentation/Cryptojacking_IEEESB2018.pdf )    
**Press:** [Schneier on Security](https://www.schneier.com/blog/archives/2018/03/hijacking_compu.html )   [Cointelegraph](https://cointelegraph.com/news/the-ethics-of-cryptojacking-rampant-malware-or-ad-free-internet )   [Motherboard Vice](https://motherboard.vice.com/en_us/article/ywqy9w/coinhive-monero-mining-cryptojacking-research?utm_source=mbtwitter )   [Cointelegraph](https://cointelegraph.com/news/attack-or-business-opportunity-academics-question-ethics-of-coinhive-cryptojacking )   [Cryptoinsider](https://cryptoinsider.21mil.com/evolution-of-cryptojacking/ )    

-------

### On the feasibility of decentralized derivatives markets

_FC 2017 Financial Cryptography and Data Security_  

> In this paper, we present Velocity, a decentralized market deployed on Ethereum for trading a custom type of derivative option. To enable the smart contract to work, we also implement a price fetching tool called PriceGeth. We present this as a case study, noting challenges in development of the system that might be of independent interest to whose working on smart contract implementations. We also apply recent academic results on the security of the Solidity smart contract language in validating our code’s security. Finally, we discuss more generally the use of smart contracts in modelling financial derivatives.

[GitHub](https://github.com/VelocityMarket/Options-Contract )   [Paper](https://link.springer.com/chapter/10.1007/978-3-319-70278-0_35 )    
**Press:** [Coindesk](https://www.coindesk.com/press-releases/worlds-first-peer-reviewed-smart-contract-paper/ )   [Bitaccess](http://blog.bitaccess.ca/workshop-on-trusted-smart-contracts/ )   [bitcoin.com](https://news.bitcoin.com/worlds-first-peer-reviewed-smart-contract-paper/ )    

-----

### Buy your coffee with bitcoin, Real-world deployment of a bitcoin point of sale terminal

_Advanced and Trusted Computing (UIC/ATC/ScalCom/CBDCom/IoP/SmartWorld), 2016 Intl IEEE Conferences, Toulouse, France._  

> In this paper we discuss existing approaches for Bitcoin payments, as suitable for a small business for small-value transactions. We develop an evaluation framework utilizing security, usability, deployability criteria,, examine several existing systems, tools. Following a requirements engineering approach, we designed, implemented a new Point of Sale (PoS) system that satisfies an optimal set of criteria within our evaluation framework. Our open source system, Aunja PoS, has been deployed in a real world cafe since October 2014.

[GitHub](https://github.com/shayanb/Bitcoin-PoS-PHP )   [Paper](https://ieeexplore.ieee.org/abstract/document/7816869/ )    

-----

### Real-world Deployability and Usability of Bitcoin

_Thesis (M.A. Sc.) - Concordia University, 2015_  


> We live in an era where Internet is one of the daily needs of human life. People use Internet banking instead of going to banks, they use email rather than postal mail.This leads to a robust digital way of living, but this also means people are trusting middle companies and third parties for their online services. The need of having a digital form of money that is not being controlled by one entity is plain to see. Bitcoin is the first and the most popular decentralized virtual currency. It is based on cryptographic functions to remove the need of a central bank and regulates the generation of new units. In this thesis, we would like to look at available tools to facilitate users in holding and using Bitcoin by a perspective on usability and security, and then evaluate the possibilities for a small business to accept Bitcoin payments. Our focus is on the usability of these tools and developing a useful framework for comparing and eval- uating future tools. While many security tools have been studied from a usability perspective, our work is the first to look at Bitcoin.

[Paper](https://spectrum.library.concordia.ca/980859/ )    

----

### A first look at the usability of bitcoin key management

_USEC 15 NDSS Workshop on Usable Security (USEC) 2015, San Diego, CA, USA, February 8, 2015, Internet Society_  


> Bitcoin users are directly or indirectly forced to deal with public key cryptography, which has a number of security and usability challenges that differ from the password-based authentication underlying most online banking services. Users must ensure that keys are simultaneously accessible, resistant to digital theft and resilient to loss. In this paper, we contribute an evaluation framework for comparing Bitcoin key management approaches, and conduct a broad usability evaluation of six representative Bitcoin clients. We find that Bitcoin shares many of the fundamental challenges of key management known from other domains, but that Bitcoin may present a unique opportunity to rethink key management for end users.

[Paper](http://wp.internetsociety.org/ndss/wp-content/uploads/sites/25/2017/09/05_3_3.pdf )    
**Press:** [The Morning Paper](https://blog.acolyer.org/2017/02/22/a-first-look-at-the-usabilty-of-bitcoin-key-management/ )   [VentureSkies](http://www.ventureskies.com/blog/key-management-options-for-the-protection-of-bitcoins )   [Standford Bitcoin and Cryptocurrency Technologies Syllabus](https://crypto.stanford.edu/cs251_fall15/syllabus.html )    

----

### Monitoring system calls for anomaly detection in modern operating systems

_Software Reliability Engineering Workshops (ISSREW), 2013 IEEE International Symposium_  


> Host-based intrusion detection systems monitor systems in operation for significant deviations from normal (and healthy) behaviour. Many approaches have been proposed in the literature. Most of them, however, do not consider even the basic attack prevention mechanisms that are activated by default on today's many operating systems. Examples of such mechanisms include Address Space Layout Randomization and Data Execution Prevention. With such security methods in place, attackers are forced to perform additional actions to circumvent them. In this research, we conjecture that some of these actions may require the use of additional system calls. If so, one can trace such attacks to discover attack patterns that can later be used to enhance the detection power of anomaly detection systems. The purpose of this short paper is to motivate the need to investigate the impact of attack on system calls while trying to overcome these prevention mechanisms.

[GitHub](https://github.com/shayanb/TAF )   [Paper](https://ieeexplore.ieee.org/abstract/document/6688856/ )    
