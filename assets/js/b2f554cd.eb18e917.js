"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/memo_docusaurus","metadata":{"permalink":"/blog/memo_docusaurus","source":"@site/blog/memo_docusaurus.md","title":"Docusaurus \uc0bd\uc9c8 \uae30\ub85d","description":"\ud604\uc7ac \uc774 \uc0ac\uc774\ud2b8\uc758 \uc5d4\uc9c4\uc778 Docusaurus\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \ud55c \ub9ce\uc740 \uc0bd\uc9c8\uc744 \uae30\ub85d\ud560 \uc608\uc815\uc774\ub2e4.","date":"2022-04-18T00:00:00.000Z","formattedDate":"April 18, 2022","tags":[{"label":"memo","permalink":"/blog/tags/memo"},{"label":"docs","permalink":"/blog/tags/docs"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"api","permalink":"/blog/tags/api"}],"readingTime":0.505,"hasTruncateMarker":true,"authors":[{"name":"SYRU","title":"security researcher","url":"https://github.com/l0vey0u","imageURL":"https://avatars.githubusercontent.com/u/30224688","key":"syru"}],"frontMatter":{"title":"Docusaurus \uc0bd\uc9c8 \uae30\ub85d","authors":"syru","tags":["memo","docs","docusaurus","api"],"categories":["Memo"],"date":"2022-04-18T00:00:00.000Z"},"nextItem":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (2)","permalink":"/blog/funny-smuggling-story-pt2"}},"content":"\ud604\uc7ac \uc774 \uc0ac\uc774\ud2b8\uc758 \uc5d4\uc9c4\uc778 Docusaurus\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \ud55c \ub9ce\uc740 \uc0bd\uc9c8\uc744 \uae30\ub85d\ud560 \uc608\uc815\uc774\ub2e4. \\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n### Blog \uae00 \uc804\uccb4\ub97c \ubcf4\uc5ec\uc904 \ud544\uc694\ub294 \uc5c6\ub294\ub370...!\\r\\n```html\\r\\n\x3c!--truncate--\x3e\\r\\n```\\r\\n\ud574\ub2f9 \ud0dc\uadf8\ub97c \uc0bd\uc785\ud558\uba74 \ube14\ub85c\uadf8 \uae00 \ubaa9\ub85d\uacfc \uadf8 \ub0b4\uc6a9\uc774 \ucd9c\ub825\ub420 \ub54c \uc774 \ud0dc\uadf8 \uc704\uae4c\uc9c0\ub97c \ubbf8\ub9ac\ubcf4\uae30 \ud615\ud0dc\ub85c \uc81c\uacf5\ud558\uba70 \ub098\uba38\uc9c0 \ub0b4\uc6a9\uc740 \uac00\ub824\uc9c4\ub2e4."},{"id":"/funny-smuggling-story-pt2","metadata":{"permalink":"/blog/funny-smuggling-story-pt2","source":"@site/blog/funny-smuggling-story-pt2.md","title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (2)","description":"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4.","date":"2022-03-06T18:00:00.000Z","formattedDate":"March 6, 2022","tags":[{"label":"research","permalink":"/blog/tags/research"},{"label":"http","permalink":"/blog/tags/http"},{"label":"http smuggling","permalink":"/blog/tags/http-smuggling"}],"readingTime":8.015,"hasTruncateMarker":true,"authors":[{"name":"SYRU","title":"security researcher","url":"https://github.com/l0vey0u","imageURL":"https://avatars.githubusercontent.com/u/30224688","key":"syru"}],"frontMatter":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (2)","authors":"syru","tags":["research","http","http smuggling"],"categories":["Research"],"date":"2022-03-06T18:00:00.000Z"},"prevItem":{"title":"Docusaurus \uc0bd\uc9c8 \uae30\ub85d","permalink":"/blog/memo_docusaurus"},"nextItem":{"title":"\uc0ac\uc18c\ud55c \ud301 \ub4e4 \uc815\ub9ac","permalink":"/blog/memo_tips"}},"content":"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4.\\r\\n\\r\\n[\uc800\ubc88 \uae00](/blog/funny-smuggling-story-pt1/)\uc5d0\uc11c\ub294 HTTP Request Smuggling\uc774 \ubb34\uc5c7\uc778\uc9c0\uc5d0 \ub300\ud574\uc11c \uc54c\ub824\ub4dc\ub838\ub294\ub370\uc694.\\r\\n\\r\\n\uc624\ub298\uc740 \uc6b0\ub9ac \uc8fc\ubcc0\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc774 \uae30\ubc95\uc73c\ub85c \uacf5\uaca9\uc774 \uac00\ub2a5\ud55c \ucde8\uc57d\uc810\uc774 \ubc1c\uc0dd\ud55c \uc0ac\ub840\ub97c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## \uc7a0\uae50, HTTP Request Smuggling\uc774 \ubb50\uc600\uc9c0?\\r\\n\\r\\n\uc0ac\ub840 \uc5f0\uad6c\uc5d0 \uc55e\uc11c \ubcf5\uc2b5\uc744 \ud574\ubd05\uc2dc\ub2e4.\\r\\n\\r\\n\uc774 \uacf5\uaca9 \uae30\ubc95\uc740 HTTP \uc694\uccad\uc774 \ucc98\ub9ac\ub420 \ub54c \uc774\uc804 \uc694\uccad\uc774 \ub2e4\uc74c \uc694\uccad\uc5d0 \ud3ec\ud568\ub418\uc5b4 \ud574\ub2f9 \uc694\uccad\uc758 \ucc98\ub9ac\uacb0\uacfc\ub97c \ubc14\uafb8\ub294 \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\uc6f9 \uc11c\ube44\uc2a4 \uc778\ud504\ub77c\ub97c \uad6c\uc131\ud560 \ub54c \ud2b8\ub798\ud53d \ubd84\uc0b0, \uce90\uc2f1 \ub4f1\uc744 \uc704\ud574 \ud504\ub85d\uc2dc\ub97c \ubc30\uce58\ud558\uac8c \ub418\ub294\ub370 \uc774 \ud504\ub85d\uc2dc\uc640 \uc6f9 \uc11c\ubc84\uac00 \uc11c\ub85c HTTP \uc694\uccad\uc758 Body \uae38\uc774\uc5d0 \ub300\ud55c \ud574\uc11d\uc744 \ub2e4\ub974\uac8c \ud558\uba74\uc11c \uc8fc\ub85c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \\r\\n\\r\\nBody\uc758 \uae38\uc774\ub294 Content-Length \ud5e4\ub354\ub098 Transfer-Encoding \ud5e4\ub354\ub97c \ud1b5\ud574 \uacb0\uc815\ub418\uba70 \uc544\ub798\uc758 \uaddc\uce59\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.\\r\\n\\r\\n1. Content-Length \ud5e4\ub354\uac00 2\uac1c \uc774\uc0c1 \uc874\uc7ac\ud558\uba74 400 Bad Request\ub85c \ucc98\ub9ac\ud55c\ub2e4.\\r\\n2. Content-Length \ud5e4\ub354\uc640 Transfer-Encoding \ud5e4\ub354\uac00 \ub3d9\uc2dc\uc5d0 \uc874\uc7ac\ud558\uba74 Transfer-Encoding\uc744 \ub530\ub978\ub2e4.\\r\\n\\r\\n\uaddc\uce59\uc744 \uc77d\uc5b4\ubcf4\uba74 \ud45c\uc900\uc5d0 \ub530\ub974\uae30\ub9cc \ud574\ub3c4 Smuggling\uc774 \ubc29\uc9c0\ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\ud558\uc9c0\ub9cc \uacf5\uaca9\uc790\ub4e4\uc740 \uc5f0\uad6c \ub05d\uc5d0 \uc544\ub798 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \uc6b0\ud68c \ud558\uc600\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n1. \ud2b9\uc218\ud55c \uc785\ub825\uac12\uc744 \ud1b5\ud574 \ud2b9\uc815 \ud30c\uc11c\uc758 \ud30c\uc2f1 \uacb0\uacfc\ub97c \ub2e4\ub974\uac8c \ub098\uc624\ub3c4\ub85d \uc720\ub3c4\ud558\uae30\\r\\n2. \ud30c\uc11c\uc758 \uc798\ubabb\ub41c \ucc98\ub9ac\ub85c\uc9c1\uc744 \uc774\uc6a9\ud558\uae30\\r\\n\\r\\n\\r\\n\\r\\n## \uacf5\uaca9 \uc0ac\ub840\\r\\n\\r\\n\ud3b8\uc758\ub97c \uc704\ud574 Content-Length\ub97c CL, Transfer-Encoding\uc744 TE\ub77c\uace0 \ubd80\ub974\uaca0\uc2b5\ub2c8\ub2e4. \\r\\n\\r\\n### CL-CL + \ud2b9\uc815 \ud30c\uc11c\uc758 \ud30c\uc2f1 \uacb0\uacfc\ub97c \ub2e4\ub974\uac8c \ub098\uc624\ub3c4\ub85d \uc720\ub3c4\ud558\uae30\\r\\n\\r\\nHAProxy\ub294 \uace0\uac00\uc6a9\uc131(HA)\uc744 \uc704\ud574 \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \ud504\ub85d\uc2dc \uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc791\ub144 9\uc6d4\uc5d0 \uc774 \ud504\ub85d\uc2dc\uc5d0\uc11c CL-CL \uc720\ud615\uc758 HTTP Request Smuggling\uc774 \ubc1c\uacac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\ud574\ub2f9 \uc720\ud615\uc774 \ub3d9\uc791\ud558\ub824\uba74 \ub450 \ud30c\uc2f1 \ub2e8\uacc4\uc5d0\uc11c 400 bad request \ucc98\ub9ac\ub97c \ub9c9\uc544\uc57c\ud569\ub2c8\ub2e4.\\r\\n\\r\\n\uc989 \ucc98\ub9ac\ud558\ub294 \uc21c\uac04\uc5d0\ub294 CL \ud5e4\ub354\ub294 \ud558\ub098\ub9cc \uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc5ec\uc57c \ud569\ub2c8\ub2e4.\\r\\n\\r\\n\ud574\ub2f9 \ucde8\uc57d \ubc84\uc83c\uc5d0\uc11c HAProxy\ub294 \ud30c\uc2f1\ub2e8\uacc4\uc5d0\uc11c CL\uc774 \ud55c\ubc88 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uba74 \ub098\uba38\uc9c0 \ud5e4\ub354\ub294 \ubb34\uc2dc\ud558\ub3c4\ub85d \ud504\ub85c\uadf8\ub798\ubc0d \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\uadf8\ub807\uae30\uc5d0 HAProxy\uac00 \uc6f9 \uc11c\ubc84\ub85c \uc804\ub2ec\ud558\ub294 HTTP \uc694\uccad\uc5d0\ub294 CL \ud5e4\ub354\uac00 \ud558\ub098\ub9cc \uc874\uc7ac\ud558\uac8c \ub429\ub2c8\ub2e4.\\r\\n\\r\\n\uc9c0\uae08\uae4c\uc9c0\uc758 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud558\uba74 \ub300\ub7b5 \uc544\ub798\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uacf5\uaca9\uc744 \uc9c4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4.\\r\\n\\r\\n![](funny-smuggling-story-pt2\\\\attack_flow.png)\\r\\n\\r\\n\uadf8\ub7fc \uc774\uc81c HAProxy\uac00 \uc804\ub2ec\ubc1b\uc740 HTTP \uc694\uccad\uc774 400 Bad Request\uac00 \uc548 \ub728\uba74\uc11c \ub450 \ubc88\uc9f8 \uc694\uccad\uc758 CL \ud5e4\ub354\uc758 \uac12\uacfc \ub2e4\ub974\uac8c \ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?\\r\\n\\r\\nHAProxy\uac00 \ud30c\uc2f1\uacfc\uc815\uc5d0\uc11c \ube44\uc815\uc0c1 \ud5e4\ub354\ub97c \uc815\uc0c1\uc73c\ub85c \ub9cc\ub4e4\uba74 \ub429\ub2c8\ub2e4.\\r\\n\\r\\nHAProxy\ub294 HTTP \uc694\uccad\uc744 \ud30c\uc2f1\ud560 \ub54c HTX\ub77c\ub294 \uad6c\uc870\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\\r\\n\\r\\nHTX\ub294 \ud06c\uac8c \uc2e4\uc81c \ub370\uc774\ud130\uac00 \ub4e4\uc5b4\uc788\ub294 payload\uc640 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 block\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4.\\r\\n\\r\\nblock\uc5d0\ub294 \uc774 \uc815\ubcf4\uac00 \uc5b4\ub5a4 payload\uc758 \uac83\uc778\uc9c0 \uc8fc\uc18c\ub97c \uc800\uc7a5\ud558\ub294 \ubd80\ubd84\uacfc \ud574\ub2f9 payload\uc758 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ubd80\ubd84\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4.\\r\\n\\r\\nHTX_BLOCK \uad6c\uc870\uc758 \ub450 \uba64\ubc84\ub294 \ubaa8\ub450 uint32 (4byte) \uc790\ub8cc\ud615\uc744 \uc4f0\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n![](funny-smuggling-story-pt2\\\\htx_t.png)\\r\\n\\r\\npayload\uc758 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ubd80\ubd84\uc744 \ubcf4\uba74 \ud5e4\ub354\uc758 \uae38\uc774\ub97c \uc800\uc7a5\ud558\ub294 \uacf5\uac04\uc774 1byte\uc778 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\uc815\uc0c1\uc801\uc778 \ud5e4\ub354 \uc911 1byte(256)\uc744 \ub118\ub294 \uae38\uc774\ub97c \uac00\uc9c0\ub294 \uac83\uc740 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \uc5c6\uc5b4\ubcf4\uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc2e4\uc81c\ub85c \uc544\ub798\uc640 \uac19\uc774 \uc8fc\uc11d\ub9cc \ub0a8\uaca8\ub450\uace0 \uae38\uc774 \uac80\uc99d \ucf54\ub4dc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n```c\\r\\n/*\\r\\n *  HEAD : 3d5f19e04d88e7c8f71cba4ea12e383c91de89f6\\r\\n *  PATH : include/haproxy/htx.h\\r\\n */\\r\\n\\r\\nstatic inline struct htx_blk *htx_add_header(struct htx *htx, const struct ist name,\\r\\n\\t\\t\\t\\t\\t     const struct ist value)\\r\\n{\\r\\n\\tstruct htx_blk *blk;\\r\\n\\r\\n\\t/* FIXME: check name.len (< 256B) and value.len (< 1MB) */\\r\\n\\tblk = htx_add_blk(htx, HTX_BLK_HDR, name.len + value.len);\\r\\n    ...\\r\\n}\\r\\n```\\r\\n\\r\\n\uc774\ucc98\ub7fc \ubbf8\ud761\ud55c \uac80\uc99d\uc740 \uacf5\uaca9\uc5d0 \uc4f0\uc774\ub294 \uc88b\uc740 \uac00\uc82f\uc774 \ub429\ub2c8\ub2e4. \\r\\n\\r\\nInteger Overflow\ub97c \ud1b5\ud574 \uc815\uc0c1 \ud5e4\ub354 + dummy \uad6c\uc870\uc758 \ud5e4\ub354\uc5d0\uc11c \uc815\uc0c1 \ubd80\ubd84\ub9cc \ucc98\ub9ac\ud558\ub3c4\ub85d \ud558\uba74 \uc6b0\ub9ac\ub294 \ube44\uc815\uc0c1 \ud5e4\ub354\ub97c \uc815\uc0c1\uc73c\ub85c \ubcf4\uc774\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\nHTX\ub97c \ud30c\uc2f1\ud560 \ub54c \ud5e4\ub354\uc758 \uae38\uc774\ub294 \uad6c\ubd84\uc790 `:` \uc55e\uae4c\uc9c0\ub85c \uacc4\uc0b0\ub429\ub2c8\ub2e4.\\r\\n\\r\\n```http\\r\\nPOST / HTTP/1.1\\r\\nContent-Length0aaaa..255\uac1c..aa: --- (1)\\r\\nContent-Length: 4 --- (2)\\r\\n\\r\\nCLCL\\r\\n```\\r\\n\\r\\n(1)\uc5d0\uc11c \ud5e4\ub354\uc758 \uae38\uc774\ub294 270\uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uadf8\ub7f0\ub370 270\uc740 `0b100001110` \uc778\ub370 \uacf5\uac04\uc740 8bit\ub9cc \ud560\ub2f9\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uc55e\uc5d0 1\uc740 \uc9e4\ub824\uc11c `0b00001110` \ub9cc \uc800\uc7a5\ub418\uac8c \ub429\ub2c8\ub2e4.\\r\\n\\r\\n\uadf8\ub807\uac8c \uc870\uc791\ub41c \uae38\uc774 14\ub9cc\ud07c \uc77d\uc73c\uba74 \uc815\uc0c1 \ud5e4\ub354\uc778 `Content-Length`\ub85c \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4.\\r\\n\\r\\n\\r\\n\\r\\n\uc55e\uc11c \uc124\uba85\ud55c \ubd80\ubd84\ub4e4\uc744 \uc815\ub9ac\ud558\uba74 \uc544\ub798\uc758 \uc21c\uc11c\ub85c Smuggling\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\r\\n\\r\\n1. \ud574\ub2f9 \ud328\ud0b7\uc744 HAProxy\uac00 \ubc1b\uc744 \ub54c\ub294 (1)\uc740 \ube44\uc815\uc0c1 \ud5e4\ub354\ub85c \ucc98\ub9ac\ub418\uace0 (2)\ub97c \uae30\uc900\uc73c\ub85c \ucc98\ub9ac\\r\\n\\r\\n2. HTX \uad6c\uc870\ub85c \ud30c\uc2f1\ud560 \ub54c Integer Overflow\ub85c \uc778\ud574 (1)\uc774 \uc815\uc0c1 \ud5e4\ub354\ub85c \ucc98\ub9ac\\r\\n\\r\\n3. HAProxy\uac00 \uc6f9 \uc11c\ubc84\uc5d0 \uc804\ub2ec\ud560 \ub54c\ub294 (1)\uc774 \ud574\ub2f9 \uc694\uccad\uc774 \ub2e4\uc74c\uacfc \uac19\uc774 \ubc14\ub00c\uc5b4 \uc804\ub2ec\\r\\n   \\r\\n   ```http\\r\\n   POST / HTTP/1.1\\r\\n   Content-Length:0 --- (1)\\r\\n   \\r\\n   CLCL\\r\\n   ```\\r\\n\\r\\n4. Content-Length\ub9cc\ud07c \ucc98\ub9ac \ud6c4 \ub0a8\uc740 CLCL\uc774 \ub2e4\uc74c \ub9ac\ud018\uc2a4\ud2b8\uc5d0 \uc0bd\uc785\ub428\\r\\n\\r\\n\uc774 \ucde8\uc57d\uc810\uc740 \ub2f9\uc5f0\ud788 \uc544\ub798\uc640 \uac19\uc774 \uae38\uc774 \uac80\uc0ac\ub97c \ucd94\uac00\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ud328\uce58\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n```diff\\r\\n+ if (name.len > 255 || value.len > 1048575)\\r\\n+     return NULL;\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n### CL-TE + \ud30c\uc11c\uc758 \uc798\ubabb\ub41c \ucc98\ub9ac \ub85c\uc9c1 \uc774\uc6a9\ud558\uae30\\r\\n\\r\\nTomcat\uc740 JSP\ub97c \ucc98\ub9ac\ud558\ub294 Web Application Server \uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc791\ub144 7\uc6d4\uc5d0 tomcat\uc5d0\uc11c CL-TE \uc720\ud615\uc758 HTTP Request Smuggling \ucde8\uc57d\uc810\uc774 \ubc1c\uacac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\ud574\ub2f9 \ubc84\uc83c\uc5d0\uc11c Client\uac00 HTTP/1.0 \uc751\ub2f5\ub9cc \ubc1b\uc544\ub4e4\uc774\ub3c4\ub85d \uc120\uc5b8\ub418\uc5b4 \uc788\uc73c\uba74 Tomcat\uc774 TE \ud5e4\ub354\ub97c \ubb34\uc2dc\ud558\ub294 \ub85c\uc9c1\uc774 \uc874\uc7ac\ud558\uc600\uace0 \uacb0\uacfc\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc774 \ub3d9\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n![image-20220303173216629](funny-smuggling-story-pt2\\\\cl_te_attack_flow.png)\\r\\n\\r\\n## \ub9c8\uce58\uba70\\r\\n\\r\\nHTTP Request Smuggling\uc740 \ucc98\ub9ac \ubc29\uc2dd\uc774 \ub3d9\uae30\ud654\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ud558\uc5ec HTTP Desync Attack\uc774\ub77c\uace0\ub3c4 \ubd88\ub9bd\ub2c8\ub2e4. \\r\\n\\r\\nDEFCON \ub300\ud68c \uc608\uc120 \ubb38\uc81c\ub85c \ud574\ub2f9 \ucde8\uc57d\uc810\uc744 \uc774\uc6a9\ud55c \ubb38\uc81c\uac00 \ucd9c\uc81c\ub41c \ubc14 \uc788\uc73c\ub2c8 \ud480\uc5b4\ubcf4\uc2dc\uba74 \uc774\ud574\ud558\uc2dc\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\uc2e4 \uac81\ub2c8\ub2e4.\\r\\n\\r\\n[uploooadit | OOO archive | DEF CON CTF](https://archive.ooo/c/uploooadit/351/)\\r\\n\\r\\n### Reference\\r\\n\\r\\n- https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33037\\r\\n- https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-40346\\r\\n- https://github.com/haproxy/haproxy/commit/3b69886f7dcc3cfb3d166309018e6cfec9ce2c95#diff-8420c19f30c823a2c9cbe3ee5d35cf31550110b38fe767b620880f9cd82cecc8"},{"id":"/memo_tips","metadata":{"permalink":"/blog/memo_tips","source":"@site/blog/memo_tips.md","title":"\uc0ac\uc18c\ud55c \ud301 \ub4e4 \uc815\ub9ac","description":"nginx - fastapi \uad6c\uc870\uc758 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc65c \uc778\uc9c0 \ud55c\uae00 \ucc98\ub9ac\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\uc558\ub2e4.","date":"2022-02-18T00:00:00.000Z","formattedDate":"February 18, 2022","tags":[{"label":"memo","permalink":"/blog/tags/memo"},{"label":"tip","permalink":"/blog/tags/tip"}],"readingTime":0.69,"hasTruncateMarker":true,"authors":[{"name":"SYRU","title":"security researcher","url":"https://github.com/l0vey0u","imageURL":"https://avatars.githubusercontent.com/u/30224688","key":"syru"}],"frontMatter":{"title":"\uc0ac\uc18c\ud55c \ud301 \ub4e4 \uc815\ub9ac","authors":"syru","tags":["memo","tip"],"categories":["Memo"],"date":"2022-02-18T00:00:00.000Z"},"prevItem":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (2)","permalink":"/blog/funny-smuggling-story-pt2"},"nextItem":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)","permalink":"/blog/funny-smuggling-story-pt1"}},"content":"nginx - fastapi \uad6c\uc870\uc758 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc65c \uc778\uc9c0 \ud55c\uae00 \ucc98\ub9ac\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\uc558\ub2e4.\\ncharset = utf8 \uc124\uc815\uc744 \uc8fc\uc5b4\ub3c4 \ud574\uacb0\uc774 \ub418\uc9c0 \uc54a\uc790\\n\x3c!--truncate--\x3e\\n### Base64 Encoding\\nURL \uc778\ucf54\ub529 \ud6c4 \uadf8 \ubb38\uc790\uc5f4\uc744 base64\ucc98\ub9ac\ud558\uc5ec \uc804\ub2ec\ud574\uc11c \ud574\uacb0\ud558\uc600\ub2e4.\\n```js\\nencoded_kr = window.btoa(unescape(encodeURLComponent(kr_str)))\\n```\\n\\n```python\\nfrom base64 import b64decode\\ndecoded_kr = b64decode(encoded_kr).decode()\\n```\\n\\n### \ub354 \uc54c\uc544\ubcf4\uc544\uc57c \ud560 \uc810\\nclient js \uc5d0\uc11c \uc804\ub2ec\ud558\ub294 \uc704\uce58\uc5d0\uc120 \ud55c\uae00\uc774 \uae68\uc84c\ub294\ub370 fastapi\uc5d0\uc11c \uc804\ub2ec\ud558\ub294 \ubc29\ud5a5\uc73c\ub860 \ud55c\uae00\uc774 \uc548 \uae68\uc84c\ub2e4 js \ucabd\uc774 \ubb38\uc81c\uc600\ub098..?"},{"id":"/funny-smuggling-story-pt1","metadata":{"permalink":"/blog/funny-smuggling-story-pt1","source":"@site/blog/funny-smuggling-story-pt1.md","title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)","description":"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4.","date":"2022-02-06T18:00:00.000Z","formattedDate":"February 6, 2022","tags":[{"label":"research","permalink":"/blog/tags/research"},{"label":"http","permalink":"/blog/tags/http"},{"label":"http smuggling","permalink":"/blog/tags/http-smuggling"}],"readingTime":5.715,"hasTruncateMarker":true,"authors":[{"name":"SYRU","title":"security researcher","url":"https://github.com/l0vey0u","imageURL":"https://avatars.githubusercontent.com/u/30224688","key":"syru"}],"frontMatter":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)","authors":"syru","tags":["research","http","http smuggling"],"categories":["Research"],"date":"2022-02-06T18:00:00.000Z"},"prevItem":{"title":"\uc0ac\uc18c\ud55c \ud301 \ub4e4 \uc815\ub9ac","permalink":"/blog/memo_tips"},"nextItem":{"title":"\uc6b0\ub9ac\uac00 \uc54c\uace0\uc788\ub294 Underflow\ub294 Underflow\uac00 \uc544\ub2c8\ub2e4.","permalink":"/blog/memo_about_underflow"}},"content":"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc624\ub298\uc740 \uac04\ub2e8\ud55c \uc6d0\ub9ac\uc9c0\ub9cc \ubd88\ud2b9\uc815 \ub2e4\uc218\uc5d0\uac8c \ud53c\ud574\ub97c \uc904 \uc218 \uc788\ub294 \uacf5\uaca9\uae30\ubc95\uc744 \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n### \uacb0\uacfc\ubb3c\uc774 \uc81c \uc694\uccad\uacfc \ub2ec\ub77c\uc694\\r\\n\\r\\n\uc124\uba85\uc744 \uc704\ud574 \ub77c\ubca8\uae30\ub97c \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4. \uc774 \ub77c\ubca8\uae30\ub294 \ubb38\uc7a5\uacfc \uae38\uc774\ub97c \uc785\ub825\ud558\uba74 \uae38\uc774\ub9cc\ud07c \uc798\ub77c \uc90d\ub2c8\ub2e4.\\r\\n\\r\\n\uc7a5\ub09c\uafb8\ub7ec\uae30 \uc2dc\ub8e8\uac00 \u201c\uc2dc\ub8e8\ubc18\u201d\uc774\ub77c\ub294 \ubb38\uc7a5\uc744 \uc785\ub825\ud574\ub193\uace0 \ub450 \uae00\uc790\ub9cc \uc785\ub825\ud588\ub2e4\uace0 \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?\\r\\n\\r\\n![label printer image for prologue](funny-smuggling-story-pt1/label_printer_for_prologue.png)\\r\\n\\r\\n\uadf8\ub2e4\uc74c \uc785\ub825\uc774\uc5c8\ub358 \u201c\ubbfc\ucd08\ub2e8\u201d \ub77c\ubca8\uc774 \u201c\ubc18\ubbfc\ucd08\u201d\uac00 \ub418\uc5b4\ubc84\ub838\uc2b5\ub2c8\ub2e4...!\\r\\n\\r\\n\uc774\ub294 \uc2dc\ub8e8\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud55c \ud6c4 \ub0a8\uc740 \u2018\ubc18\u2019\uc774\ub77c\ub294 \uae00\uc790\uac00 \ub2e4\uc74c \uc694\uccad\uc5d0 \ud3ec\ud568\ub418\uc5b4 \ubc1c\uc0dd\ud55c \uac83\uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc774\ub7f0 \uc77c\uc774 \uc6f9 \uc11c\ube44\uc2a4\uc5d0\uc11c\ub3c4 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \ub098\uc758 \uc694\uccad\uc774 \ud0c0\uc778\uc5d0\uac8c \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\ub294 HTTP Request Smuggling\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n## HTTP Request Smuggling\\r\\n\\r\\n> HTTP \uc694\uccad\uc5d0 \ub300\ud55c \uc77c\uad00\uc131 \uc5c6\ub294 \ud574\uc11d\\r\\n> \\r\\n\\r\\n[CWE-444: Inconsistent Interpretation of HTTP Requests (\'HTTP Request Smuggling\')](https://cwe.mitre.org/data/definitions/444.html)\\r\\n\\r\\n### \ub3d9\uc77c\ud55c TCP Connection\uc5d0\uc11c \uc5ec\ub7ec\uac1c\uc758 HTTP Message\uac00 \ucc98\ub9ac\ub41c \uc0ac\uc5f0\\r\\n\\r\\nHTTP \ud504\ub85c\ud1a0\ucf5c\uc740 TCP \ud1b5\uc2e0 \uc704\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4.\\r\\n\\r\\n(UDP\ub97c \uc0ac\uc6a9\ud558\ub294 HTTP 3\ub294 \uc774 \uae00\uc5d0\uc120 \uc5b8\uae09\ud558\uc9c0 \uc54a\uaca0\uc2b5\ub2c8\ub2e4.)\\r\\n\\r\\nTCP \ud1b5\uc2e0\uc740 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ud1b5\uc2e0\uc744 \uc704\ud574 \uc5ec\ub7ec \uc815\ubcf4\ub97c \uacf5\uc720\ud558\ub294 3way handshake\uacfc\uc815\uc744 \uac70\uce69\ub2c8\ub2e4.\\r\\n\\r\\nHTTP \ud1b5\uc2e0\uc744 \ud560 \ub54c\ub9c8\ub2e4 TCP \ud1b5\uc2e0\uc744 \uc0c8\ub85c \ud574\uc57c \ud55c\ub2e4\uba74 \ub2f9\uc5f0\ud788 \uadf8\ub9cc\ud07c handshake\ub3c4 \ud574\uc57c \ud558\uac8c \ub429\ub2c8\ub2e4.\\r\\n\\r\\n\uc774 \uc2dc\uac04\uc744 \ucd5c\ub300\ud55c \uc904\uc774\uae30 \uc704\ud574 HTTP\ub294 \uae30\uc874\uc5d0 \ub9cc\ub4e4\uc5b4\uc9c4 TCP \ud1b5\uc2e0\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n### HTTP\uc5d0\uc11c Body \uc815\ubcf4\ub97c \uc5bb\ub294 \ubc29\ubc95\\r\\n\\r\\n[RFC \ubb38\uc11c](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.3)\uc5d0 \ub530\ub974\uba74 Body\uc758 \uae38\uc774\ub294 \ub2e4\uc74c \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4.\\r\\n\\r\\n- Transfer-Encoding \ud5e4\ub354\uac00 \uc874\uc7ac\ud558\uace0 chunked transfer coding\uc73c\ub85c \uc804\ub2ec\ub420 \ub54c transfer coding\uc774 data \uc804\uc1a1\uc774 \ub05d\ub0ac\uc74c\uc744 \uac00\ub9ac\ud0ac \ub54c\uae4c\uc9c0\uc758 \uae38\uc774\ub85c \uacb0\uc815\\r\\n- Transfer-Encoding \ud5e4\ub354\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uace0 \uc720\ud6a8\ud55c Content-Length \ud5e4\ub354\uac00 \uc874\uc7ac\ud560 \ub54c \ud574\ub2f9 \ud5e4\ub354\uc758 \uac12\uc73c\ub85c \uacb0\uc815\\r\\n- Transfer-Encoding \ud5e4\ub354\uc640 Content-Length \ud5e4\ub354\uac00 \ubaa8\ub450 \uc874\uc7ac\ud558\uba74 Content-Length \ud5e4\ub354 \ubb34\uc2dc\\r\\n- Content-Length \ud5e4\ub354\uac00 \uc5ec\ub7ec \uac1c \uc788\uc73c\uba74 400 Bad Request \ucc98\ub9ac\\r\\n\\r\\n### \ub77c\ubca8\uae30\uac00 \uc6f9 \uc11c\ube44\uc2a4\uc600\ub2e4\uba74\\r\\n\\r\\n\ub77c\ubca8\uae30 \uc774\uc57c\uae30\ub97c \uc6f9 \uc11c\ube44\uc2a4\ub85c \ud655\uc7a5 \uc2dc\ucf1c\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\ub77c\ubca8\uae30 \uc785\ub825\uc740 \uc644\ub8cc\ub97c \ub204\ub97c \ub54c\uae4c\uc9c0 \uc785\ub825\ud558\ub2c8 Transfer-Encoding \ubc29\uc2dd\uc774 \uc5b4\uc6b8\ub9ac\uace0 \ub77c\ubca8 \ucee4\ud130\ub294 \uc785\ub825\ubc1b\uc740 \uae38\uc774\ub9cc\ud07c \uc790\ub974\ub2c8 Content-Length\uac00 \uc5b4\uc6b8\ub9ac\uaca0\ub124\uc694\\r\\n\\r\\n\ub77c\ubca8\uae30\uc5d0 \ubb38\uc7a5\uc744 \uc785\ub825\ud558\uace0 \uc790\ub974\ub294 \uacfc\uc815\uc740 \uc544\ub798\uc640 \uac19\uc774 \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n![packet diagram](funny-smuggling-story-pt1/packet_diagram.png)\\r\\n\\r\\n\ub77c\ubca8 \uc694\uccad\uc5d0 \ub300\ud55c \uc751\ub2f5\uc740 \uc544\ub798\uc640 \uac19\uc774 \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n![simplified stream](funny-smuggling-story-pt1/packet_simplify.png)\\r\\n\\r\\n\uc774\ub807\uac8c \ub41c \uc6d0\uc778\uc774 \ubb34\uc5c7\uc77c\uae4c\uc694? \uc6b0\uc120 \ub3d9\uc77c\ud55c \ub77c\ubca8\uce74\ud2b8\ub9ac\uc9c0(TCP \ucee4\ub125\uc158)\uc5d0\uc11c \ucc98\ub9ac\ub418\uc5c8\uace0 \ub77c\ubca8\uae30\uc5d0\uc11c\ub294 \ubb38\uc790\uc5f4\uc758 \ub05d(Transfer-Encoding)\uc774 \uae30\uc900\uc774\uc600\uc9c0\ub9cc \ub77c\ubca8 \ucee4\ud130\uc5d0\uc11c\ub294 \uae38\uc774\ub85c \uc785\ub825\ud55c \uac12(Content-Length)\uc774 \uae30\uc900\uc774\uc600\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \\r\\n\\r\\n\ub77c\ubca8 \ucee4\ud130\ub294 \uc55e\uc11c \uc124\uba85\ub4dc\ub9b0 \uaddc\uce59\uc744 \uc5b4\uae34 \uc608\uc2dc\ub77c\uace0 \ubcfc \uc218\ub3c4 \uc788\uaca0\ub124\uc694\\r\\n\\r\\n\uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ub2e4\ub978 \uc694\uccad\uc5d0 \uc0bd\uc785\ub418\uc5b4 \ud574\ub2f9 \uc694\uccad\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uac8c \ud558\uac70\ub098 \uc644\uc804\ud788 \ub2e4\ub978 \uc694\uccad\uc73c\ub85c \ubc14\uafd4\ubc84\ub9b4 \uc218 \uc788\ub294 \uacf5\uaca9\uc774 \ubc14\ub85c **HTTP Request Smuggling**\uc785\ub2c8\ub2e4.\\r\\n\\r\\n\uc774 \uacf5\uaca9\uae30\ubc95\uc740 \uc720\ud615\uc774 \ud06c\uac8c \ub450 \uac00\uc9c0\ub85c \ub098\ub269\ub2c8\ub2e4.\\r\\n\\r\\nContent-Length \ud5e4\ub354 \uc911\ubcf5 \ubb38\uc81c \uc774\ud558 CL-CL\uc774\ub77c \ubd80\ub974\ub294 \uc720\ud615\uacfc Transfer-Encoding, Content-Length \ud5e4\ub354 \ud63c\ub3d9 \ubb38\uc81c \uc774\ud558 CL-TE\ub77c\uace0 \ubd80\ub974\ub294 \uc720\ud615\uc785\ub2c8\ub2e4.\\r\\n\\r\\n### \uadf8\ub0e5 \ud45c\uc900\ub9cc \ub530\ub974\uba74 \ub418\ub294 \uac83 \uc544\ub2cc\uac00\uc694?\\r\\n\\r\\n\ub9de\uc2b5\ub2c8\ub2e4. \ucc98\ub9ac\ud558\ub294 \uc8fc\uccb4\ub4e4\uc774 \ubaa8\ub450 \ub3d9\uc77c\ud55c \uae30\uc900\uc73c\ub85c \ucc98\ub9ac\ud558\uba74 \ub429\ub2c8\ub2e4.\\r\\n\\r\\n\ud558\uc9c0\ub9cc \ucd5c\uadfc \uacf5\uaca9 \uc720\ud615\uc740 \uc694\uccad\uc744 \ud30c\uc2f1\ud560 \ub54c \ud2b9\uc815 \ud5e4\ub354\ub97c \uc778\uc2dd\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \ud2b9\uc218\ubb38\uc790\ub97c \uc0bd\uc785\ud558\uac70\ub098 \ub2e4\ub978 \ub0b4\uc6a9\uc73c\ub85c \uc778\uc2dd\ud558\ub3c4\ub85d Buffer Overflow \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \ub4f1 \uaddc\uce59\ub9cc \ub530\ub77c\uc11c\ub294 \ub300\uc751\ud558\uae30 \uc5b4\ub824\uc6b4 \uac83\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\\r\\n\\r\\n\ud45c\uc900\uc744 \ub530\ub974\ub294 \uac83 \uc678\uc5d0\ub3c4 \uae30\ubcf8\uc801\uc778 \uae38\uc774 \uac80\uc99d\uc774\ub098 \ud2b9\uc218\ubb38\uc790 \ucc98\ub9ac\ub4f1\uc744 \uc2e0\uacbd\uc368\uc57c \ud569\ub2c8\ub2e4.\\r\\n\\r\\n## \ub9c8\uce58\uba70\\r\\n\\r\\n\ub2e4\uc74c \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \uc2e4\uc81c\ub85c \ucde8\uc57d\uc810\uc774 \ubc1c\uc0dd\ud55c \uc0ac\ub840\ub97c \uacf5\uaca9 \uc720\ud615\ubcc4\ub85c \ub2e4\ub904\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."},{"id":"/memo_about_underflow","metadata":{"permalink":"/blog/memo_about_underflow","source":"@site/blog/memo_about_underflow.md","title":"\uc6b0\ub9ac\uac00 \uc54c\uace0\uc788\ub294 Underflow\ub294 Underflow\uac00 \uc544\ub2c8\ub2e4.","description":"\uc798 \uc54c\ub824\uc9c4 Underflow\uc758 \uc815\uc758","date":"2020-02-16T00:00:00.000Z","formattedDate":"February 16, 2020","tags":[{"label":"memo","permalink":"/blog/tags/memo"},{"label":"term","permalink":"/blog/tags/term"},{"label":"underflow","permalink":"/blog/tags/underflow"}],"readingTime":0.705,"hasTruncateMarker":true,"authors":[{"name":"SYRU","title":"security researcher","url":"https://github.com/l0vey0u","imageURL":"https://avatars.githubusercontent.com/u/30224688","key":"syru"}],"frontMatter":{"title":"\uc6b0\ub9ac\uac00 \uc54c\uace0\uc788\ub294 Underflow\ub294 Underflow\uac00 \uc544\ub2c8\ub2e4.","authors":"syru","tags":["memo","term","underflow"],"categories":["Memo"],"date":"2020-02-16T00:00:00.000Z"},"prevItem":{"title":"\uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)","permalink":"/blog/funny-smuggling-story-pt1"}},"content":"### \uc798 \uc54c\ub824\uc9c4 Underflow\uc758 \uc815\uc758\\r\\n\uc790\ub8cc\ud615\uc774 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \ubc94\uc704\ub97c **\ub118\uc5b4\uc11c** \ucd5c\uc19f\uac12 \ubcf4\ub2e4 \uc791\uc544\uc9c0\uba74 \ucd5c\ub313\uac12 \ubd80\ud130 \ub2e4\uc2dc \uc2dc\uc791\ub418\ub294 \ud604\uc0c1\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n### \uc774 \uc5ed\uc2dc Integer Overflow\\r\\n\\r\\n```\\r\\n# 32bit\\r\\n-2,147,483,648 - 1\\r\\n= -2,147,483,648 + (~1)\\r\\n\\r\\n0,10000000,00000000,00000000,00000000(2)\\r\\n0,11111111,11111111,11111111,11111111(2)\\r\\n--------------------------------------\\r\\n1,01111111,11111111,11111111,11111111(2)\\r\\n\\r\\noverflow \ubd80\ubd84 \uc81c\uc678 \\r\\n= 2,147,483,648\\r\\n```\\r\\n\\r\\n### \uadf8\ub7fc Underflow\ub294 \ubb34\uc5c7\uc778\uac00?\\r\\n\ubd80\ub3d9\uc18c\uc218\uc810\uc5d0\uc11c \ud45c\ud604 \uac00\ub2a5 \ubc94\uc704\ubcf4\ub2e4 \uc791\uc740 0\uc5d0 \uac00\uae4c\uc6b4 \uc218\uac00 0\uc774 \ub418\ub294 \ud604\uc0c1\\r\\n\\r\\n### Integer Underflow\\r\\n\uc124\uba85\uc5d0 \ud3b8\uc758\uc131\uc744 \uc704\ud574 Floating Underflow, Integer Underflow\ub85c \uad6c\ubd84\ud558\uc5ec Underflow\ub97c \uc4f0\uae30\ub3c4 \ud55c\ub2e4."}]}')}}]);