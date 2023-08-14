"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{472638:function(he,kn,r){var fn=r(97857),j=r.n(fn),xn=r(952677),w=r.n(xn),Fn=r(805574),pn=r.n(Fn),$n=r(513769),c=r.n($n),g=r(667294),F=r(830084),En=r(574865),p=r.n(En),an=r(785893),Kn=["to","children"],f=(0,g.forwardRef)(function(M,S){var n=M.to,Dn=M.children,zn=c()(M,Kn),oe=(0,g.useTransition)(),Wn=pn()(oe,2),Hn=Wn[0],re=Wn[1],Yn=(0,F.s0)(),Jn=(0,F.TH)(),Qn=Jn.pathname,Un=(0,g.useMemo)(function(){return w()(n)==="object"?"".concat(n.pathname||Qn).concat(n.search||"").concat(n.hash||""):n},[n]),On=function(Tn){Un.startsWith("http")||!Tn.metaKey&&!Tn.ctrlKey&&!Tn.shiftKey&&(Tn.preventDefault(),re(function(){Yn(Un)}))};return(0,g.useLayoutEffect)(function(){Hn?p().start():p().done()},[Hn]),(0,an.jsx)("a",j()(j()({ref:S,href:Un,onClick:On},zn),{},{children:Dn}))});kn.Z=f},334230:function(he,kn,r){r.r(kn),r.d(kn,{default:function(){return zr}});var fn=r(805574),j=r.n(fn),xn=r(294184),w=r.n(xn),Fn=r(727484),pn=r.n(Fn),$n=r(533852),c=r(830084),g=r(667294),F=r(715778),En=r(634577),p=r(302559),an=r(438746),Kn=r(168400),f=r.n(Kn),M=r(370917),S=r(65630),n=r(785893),Dn,zn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},oe=function(){var e=(0,S.Fg)(),t=function l(u){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return b<=10?`
.palette-`.concat(u,"-").concat(b,` {
  background: `).concat(e["".concat(u,"-").concat(b)],`;
}
`).concat(l(u,b+1),`
    `):""},a=function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return u<=13?`
.palette-gray-`.concat(u,` {
  background: `).concat(zn[u],`;
}
`).concat(l(u+1),`
    `):""};return(0,n.jsx)(M.xB,{styles:(0,M.iv)(Dn||(Dn=f()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},Wn=oe,Hn,re=function(){return(0,n.jsx)(M.xB,{styles:(0,M.iv)(Hn||(Hn=f()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Yn,Jn=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(Yn||(Yn=f()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),i.colorText,i.fontSize,i.fontFamily,i.lineHeight,i.colorBgContainer)})},Qn,Un=function(){return(0,n.jsx)(M.xB,{styles:(0,M.iv)(Qn||(Qn=f()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }
    `])))})},On=r(510274),_n,Tn=function(){var e=(0,S.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(M.xB,{styles:(0,M.iv)(_n||(_n=f()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new On.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new On.C(a).setAlpha(.75).toHexString(),t,t,new On.C(a).setAlpha(.75).toHexString(),t,t,t,t,new On.C(a).setAlpha(.6).toHexString(),t,t,t)})},ge=Tn,se,bn=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(se||(se=f()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),i.colorText,i.fontSize,i.borderRadius)})},d,$=function(){var e=(0,S.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(M.xB,{styles:(0,M.iv)(d||(d=f()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},h=$,o,s=function(){var i=(0,S.Fg)(),e=i.antCls,t=i.iconCls;return(0,n.jsx)(M.xB,{styles:(0,M.iv)(o||(o=f()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,i.colorPrimary,t,e)})},v,k=function(){var i=(0,S.Fg)(),e=i.iconCls;return(0,n.jsx)(M.xB,{styles:(0,M.iv)(v||(v=f()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),i.colorIcon,i.colorIconHover,i.colorBorder,i.colorTextSecondary,e,i.colorLinkHover)})},N,D=function(){return(0,n.jsx)(M.xB,{styles:(0,M.iv)(N||(N=f()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},A,x=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(A||(A=f()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),i.screenLG,i.colorBgContainer,i.colorSplit,i.colorLink,i.colorBgContainer)})},U,G=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(U||(U=f()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary)})},J,nn=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(J||(J=f()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),i.colorPrimary,i.colorError,i.colorText,i.colorTextSecondary,i.colorBgContainer,i.borderRadius,i.colorBgContainer,i.colorBgContainer)})},rn,en="dumi-default-",ln=function(){var i=(0,S.Fg)();return(0,n.jsx)(M.xB,{styles:(0,M.iv)(rn||(rn=f()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),en,i.colorText,i.colorBgContainer,i.colorBgContainer,i.colorTextPlaceholder,en,i.colorBgElevated,i.colorBgElevated,en,i.controlItemBgActive,i.controlItemBgHover,i.colorText,i.colorText)})},R,vn=function(){return(0,n.jsx)(M.xB,{styles:(0,M.iv)(R||(R=f()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Q=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Jn,{}),(0,n.jsx)(Un,{}),(0,n.jsx)(ge,{}),(0,n.jsx)(bn,{}),(0,n.jsx)(h,{}),(0,n.jsx)(s,{}),(0,n.jsx)(k,{}),(0,n.jsx)(D,{}),(0,n.jsx)(x,{}),(0,n.jsx)(G,{}),(0,n.jsx)(nn,{}),(0,n.jsx)(vn,{}),(0,n.jsx)(Wn,{}),(0,n.jsx)(re,{}),(0,n.jsx)(ln,{})]})},mn=Q,Nn=r(857278),hn=r(430932),sn=r(985093),yn=r(115668),ae=r(642207),An=r(301210),q=r(13923),wn=r(825035),Gn=r(937993),ce=r(448118),qn=r(938545),fe=r(569980),ie=r(391298),ye=r(630770),Zn=r(438199),xe=r(693399),ne="ant-where-checker",De={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function He(){var i=(0,p.Z)(De),e=j()(i,1),t=e[0],a=g.useState(!0),l=j()(a,2),u=l[0],b=l[1];return g.useEffect(function(){var y=document.createElement("p");y.className=ne,y.style.position="fixed",y.style.pointerEvents="none",y.style.visibility="hidden",y.style.width="0",document.body.appendChild(y),(0,xe.updateCSS)(`
:where(.`.concat(ne,`) {
  content: "__CHECK__";
}
    `),ne);var C=getComputedStyle(y),m=C.content;b(String(m).includes("CHECK")),document.body.removeChild(y),(0,xe.removeCSS)(ne)},[]),u?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var le,de,Se={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Oe=function(){var e=(0,g.useContext)(Zn.Z),t=e.isMobile;return(0,S.kc)(function(a){var l=a.token,u=a.css,b=new On.C((0,ye.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(le||(le=f()([`
      background: `,`;
    `])),b),footer:u(de||(de=f()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),b,l.colorTextSecondary,l.colorText,t?60:0,t?20:0,l.marginXXL,l.fontSize)}})()},Ze=function(){var e=(0,an.Z)(),t=(0,p.Z)(Se),a=j()(t,2),l=a[0],u=a[1],b=Oe(),y=b.styles,C=e.getLink,m=g.useMemo(function(){var T=u==="cn",I={title:(0,n.jsx)(c._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(c._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(c._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(c._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(c._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(c._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(c._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(c._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(c._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},P={title:(0,n.jsx)(c._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Nn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(hn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(sn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(yn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(yn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(c._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};T&&P.items.push({icon:(0,n.jsx)(ae.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.work_with_us"}),url:C("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.rU});var H={title:(0,n.jsx)(c._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(An.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(q.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.change-log"}),url:C("/changelog"),LinkComponent:c.rU},{icon:(0,n.jsx)(wn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.faq"}),url:C("/docs/react/faq"),LinkComponent:c.rU},{icon:(0,n.jsx)(Gn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(ce.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(wn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(wn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},X={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(c._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(c._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:(0,n.jsx)(c._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(c._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(c._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(c._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(fe.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.theme"}),url:C("/theme-editor"),LinkComponent:c.rU}]};return[I,P,H,X]},[u,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ie.Z,{columns:m,className:y.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(He,{})]})},ke=Ze,Re=r(97857),W=r.n(Re),ze=r(9783),we=r.n(ze),Ee=r(660532),Fe=r(24569),$e=r(98651),We=r(469181),Ue=r(344682),Te=r(664095),je=r(883458),K=r(316165),cn="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",dn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Xn=function(e){return(0,n.jsx)(K.Z,W()(W()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?cn:dn})})}))},Pn=Xn,jn=r(373638),ve,Vn,be=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.headerHeight,l=e.colorTextHeading,u=e.fontFamily,b=e.mobileMaxWidth;return{logo:t(ve||(ve=f()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,l,u,a,l,b),title:t(Vn||(Vn=f()([`
      line-height: 32px;
    `])))}}),Pe=function(e){var t=e.isZhCN,a=(0,c.TH)(),l=a.search,u=be(),b=u.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(c.rU,{to:jn.J1("/",t,l),className:b.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:b.title,children:"Ant Design"})]})})},Be=Pe,mo=r(280882),ho=r(963918),ue=r(905303),_e,qe,nt,et,tt=(0,S.kc)(function(i){var e=i.css,t=i.token;return{smallStyle:e(_e||(_e=f()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(qe||(qe=f()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(nt||(nt=f()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(et||(et=f()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),ot=function(){var e=tt(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(c._H,{id:"app.implementation.community"}),")"]})},rt=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(ot,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(ot,{})]}),key:"vue"}]},go=function(e){var t=e.isRTL,a=tt(),l=a.styles;return(0,n.jsx)(ho.Z,{menu:{items:rt()},placement:"bottomRight",children:(0,n.jsxs)(ue.ZP,{size:"small",children:[(0,n.jsx)(c._H,{id:"app.header.menu.more"}),(0,n.jsx)(mo.Z,{className:w()(t?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},fo=go,xo=r(719632),pe=r.n(xo),at=r(923232),ee=r(472638),it,lt,vo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},bo=(0,S.kc)(function(i){var e=i.token,t=e.antCls,a=e.iconCls,l=e.fontFamily,u=e.headerHeight,b=e.menuItemBorder,y=e.colorPrimary;return{nav:(0,S.iv)(it||(it=f()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,t,t,t,40+12*2,u,u,b,t,a,t,y,t,t),popoverMenuNav:(0,S.iv)(lt||(lt=f()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),yo=function(i){var e,t,a,l=i.isZhCN,u=i.isClient,b=i.isMobile,y=i.responsive,C=i.directionText,m=i.onLangChange,T=i.onDirectionChange,I=(0,c.TH)(),P=I.pathname,H=I.search,X=(0,p.Z)(vo),Z=j()(X,1),L=Z[0],O=(0,c.yh)(),E=((e=O["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],z=bo(),V=z.styles,un=b?"inline":"horizontal",Bn=P.split("/").filter(function(tn){return tn}).slice(0,-1).join("/"),Ln=Bn||"home";P.startsWith("/changelog")?Ln="docs/react":P.startsWith("/docs/resources")&&(Ln="docs/resources");var gn,In=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(c._H,{id:"app.header.lang"}),onClick:m,key:"switch-lang"},{label:C,onClick:T,key:"switch-direction"}].concat(pe()(rt()));b?gn=In:y==="crowded"&&(gn=[{label:(0,n.jsx)(Ee.Z,{}),key:"additional",children:pe()(In)}]);var B=[{label:(0,n.jsx)(ee.Z,{to:jn.J1("/docs/spec/introduce",l,H),children:L.design}),key:"docs/spec"},{label:(0,n.jsx)(ee.Z,{to:jn.J1("/docs/react/introduce",l,H),children:L.development}),key:"docs/react"},{label:(0,n.jsx)(ee.Z,{to:jn.J1("/components/overview/",l,H),children:L.components}),key:"components"},E.length?{label:(0,n.jsx)(ee.Z,{to:jn.J1(E.sort(function(tn,Cn){return tn.frontmatter.date>Cn.frontmatter.date?-1:1})[0].link,l,H),children:L.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(ee.Z,{to:jn.J1("/docs/resources",l,H),children:L.resources}),key:"docs/resources"},l&&u&&window.location.host!=="ant-design.antgroup.com"&&window.location.host!=="ant-design.gitee.io"?{label:"\u56FD\u5185\u955C\u50CF",key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(pe()((a=gn)!==null&&a!==void 0?a:[]));return(0,n.jsx)(at.Z,{mode:un,selectedKeys:[Ln],className:V.nav,disabledOverflow:!0,items:B,style:{borderRight:0}})},st=r(879587),ct,dt,ut,pt,mt,Ce="1.2em",wo=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.colorText,l=e.colorBorder,u=e.colorBgContainer,b=e.colorBgTextHover,y=e.borderRadius,C=e.controlHeight,m=e.motionDurationMid;return{btn:t(ct||(ct=f()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,l,C,C,y,m,m,b,Ce,Ce,Ce),innerDiv:t(dt||(dt=f()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Ce,Ce),labelStyle:t(ut||(ut=f()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Ce,a,a),label1Style:t(pt||(pt=f()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,u),label2Style:t(mt||(mt=f()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),jo=function(e){var t=e.label1,a=e.label2,l=e.tooltip1,u=e.tooltip2,b=e.value,y=e.pure,C=e.onClick,m=wo(),T=m.styles,I=T.btn,P=T.innerDiv,H=T.labelStyle,X=T.label1Style,Z=T.label2Style,L=(0,n.jsx)("button",{onClick:C,className:I,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[y&&(b===1?t:a),!y&&(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)("span",{className:w()(H,b===1?X:Z),children:t}),(0,n.jsx)("span",{className:w()(H,b===1?Z:X),children:a})]})]})},"lang-button");return l||u?(0,n.jsx)(st.Z,{title:b===1?l:u,children:L}):L},Ge=jo,ht,gt,ft,xt=1120,vt=1200,Co=(0,S.kc)(function(i){var e=i.token,t=i.css,a="#ced4d9";return{header:t(ht||(ht=f()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(gt||(gt=f()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(ft||(ft=f()([`
      width: 16px;
    `]))),popoverMenu:we()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),bt="ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL";function yt(){window.localStorage.setItem(bt,"true")}function So(){return!window.localStorage.getItem(bt)}var ko=function(){var e=g.useState(!1),t=j()(e,2),a=t[0],l=t[1],u=(0,p.Z)(),b=j()(u,2),y=b[1],C=(0,c.WF)(),m=C.pkg,T=(0,jn.Is)(),I=(0,g.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),P=j()(I,2),H=P[0],X=P[1],Z=(0,g.useContext)(Zn.Z),L=Z.direction,O=Z.isMobile,E=Z.updateSiteConfig,z=(0,g.useRef)(null),V=(0,c.TH)(),un=V.pathname,Bn=V.search,Ln=Co(),gn=Ln.styles,In=(0,g.useCallback)(function(){X(function(on){return W()(W()({},on),{},{menuVisible:!1})})},[]),B=(0,g.useCallback)(function(){X(function(on){return W()(W()({},on),{},{windowWidth:window.innerWidth})})},[]),tn=(0,g.useCallback)(function(){X(function(on){return W()(W()({},on),{},{menuVisible:!0})})},[]),Cn=(0,g.useCallback)(function(on){X(function(te){return W()(W()({},te),{},{menuVisible:on})})},[]),Rn=function(){E({direction:L!=="rtl"?"rtl":"ltr"})};(0,g.useEffect)(function(){In()},[V]),(0,g.useEffect)(function(){return l(typeof window!="undefined"),B(),window.addEventListener("resize",B),z.current=(0,jn.qE)(function(on){on!=="timeout"&&on!=="error"&&window.location.host!=="ant-design.antgroup.com"&&So()&&$e.Z.confirm({title:"\u63D0\u793A",content:"\u5185\u7F51\u7528\u6237\u63A8\u8350\u8BBF\u95EE\u56FD\u5185\u955C\u50CF\u4EE5\u83B7\u5F97\u6781\u901F\u4F53\u9A8C\uFF5E",okText:"\u{1F680} \u7ACB\u523B\u524D\u5F80",cancelText:"\u4E0D\u518D\u5F39\u51FA",closable:!0,zIndex:99999,onOk:function(){window.open("https://ant-design.antgroup.com","_self"),yt()},onCancel:function(){yt()}})}),function(){window.removeEventListener("resize",B),z.current&&clearTimeout(z.current)}},[]);var Mn=(0,g.useCallback)(function(on){var te=window.location.href,Pr=window.location.pathname;if(/overview/.test(Pr)&&/0?[1-39][0-3]?x/.test(on)){window.location.href=te.replace(window.location.origin,on).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(on)?"":"/react","/introduce")).replace(/\/$/,"");return}var Qe=new URL(te.replace(window.location.origin,on));Qe.host.includes("antgroup")&&(window.location.href="".concat(Qe.href.replace(/\/$/,""),"/")),window.location.href=Qe.href.replace(/\/$/,"")},[]),Ie=(0,g.useCallback)(function(){var on="".concat(window.location.protocol,"//"),te=window.location.href.slice(on.length);jn.Fy()&&localStorage.setItem("locale",jn.KE(un)?"en-US":"zh-CN"),window.location.href=on+te.replace(window.location.pathname,jn.J1(un,!jn.KE(un),Bn).pathname)},[V]),Y=(0,g.useMemo)(function(){return L!=="rtl"?"RTL":"LTR"},[L]),_=(0,g.useMemo)(function(){return L==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[L]),Sn=H.menuVisible,me=H.windowWidth,lo=H.searching,so=W()(we()({},m.version,m.version),T==null?void 0:T.docVersions),Nr=Object.keys(so).map(function(on){return{value:so[on],label:on}}),co=["","index","index-cn"].includes(un),Lr=y==="cn",Er=L==="rtl",Ye=null;me<xt?Ye="crowded":me<vt&&(Ye="narrow");var Tr=w()(gn.header,"clearfix",{"home-header":co}),Je={isZhCN:Lr,isRTL:Er,isClient:a},uo=(0,n.jsx)(yo,W()(W()({},Je),{},{responsive:Ye,isMobile:O,directionText:Y,onLangChange:Ie,onDirectionChange:Rn}),"nav"),Le=[uo,(0,n.jsx)(We.Z,{className:"version",size:"small",defaultValue:m.version,onChange:Mn,dropdownStyle:_,popupMatchSelectWidth:!1,getPopupContainer:function(te){return te.parentNode},options:Nr},"version"),(0,n.jsx)(fo,W()({},Je),"more"),(0,n.jsx)(Ge,{onClick:Ie,value:jn.KE(un)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ge,{onClick:Rn,value:L==="rtl"?2:1,label1:(0,n.jsx)(Pn,{className:gn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Pn,{className:gn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ge,{value:1,label1:(0,n.jsx)(An.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];me<xt?Le=lo?[]:[uo]:me<vt&&(Le=lo?[]:Le);var po=co?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Tr,children:[O&&(0,n.jsx)(Ue.Z,{overlayClassName:gn.popoverMenu,placement:"bottomRight",content:Le,trigger:"click",open:Sn,arrow:{arrowPointAtCenter:!0},onOpenChange:Cn,children:(0,n.jsx)(Ee.Z,{className:"nav-phone-icon",onClick:tn})}),(0,n.jsxs)(Te.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(je.Z,W()(W()({},po[0]),{},{children:(0,n.jsx)(Be,W()(W()({},Je),{},{location:V}))})),(0,n.jsxs)(je.Z,W()(W()({},po[1]),{},{className:gn.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Fe.ZP,{})}),!O&&Le]}))]})]})},zo=ko,Br=r(945462),No=r(377376),Me=r(185209),Lo=function(){var e=(0,c.eL)(),t=(0,g.useMemo)(function(){var b;if(!e.frontmatter.subtitle&&!e.frontmatter.title)b="404 Not Found - Ant Design";else{var y;b="".concat(e.frontmatter.subtitle||""," ").concat(((y=e.frontmatter)===null||y===void 0?void 0:y.title)||""," - Ant Design")}var C=e.frontmatter.description||"";return[b,C]},[e]),a=j()(t,2),l=a[0],u=a[1];return(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),u&&(0,n.jsx)("meta",{name:"description",content:u})]})},wt=Lo,jt=r(148050),Eo=r(823493),To=r.n(Eo),Po=r(517951),Bo=r(658192),Ct,St,kt,zt=["scroll","resize"],Mo=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.boxShadowSecondary,l=e.antCls;return{affixTabs:t(Ct||(Ct=f()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,l,l,l),affixTabsFixed:t(St||(St=f()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(kt||(kt=f()([`
      text-transform: capitalize;
    `])))}}),Nt=32,Ao=function(){var e=g.useRef(null),t=g.useRef([]),a=g.useState(!1),l=j()(a,2),u=l[0],b=l[1],y=g.useState(null),C=j()(y,2),m=C[0],T=C[1],I=Mo(),P=I.styles,H=P.affixTabs,X=P.affixTabsFixed,Z=P.span;function L(E){var z=document.getElementById(E);if(z){var V=z.offsetTop-e.current.offsetHeight-Nt;(0,Bo.Z)(V)}}g.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(E){var z=E.id;return z}),b(!0)},[]),g.useEffect(function(){var E=decodeURIComponent((location.hash||"").slice(1));E&&L(E)},[u]);var O=g.useMemo(function(){function E(){for(var z=window,V=z.scrollY,un=e.current.offsetHeight,Bn=t.current.length-1;Bn>=0;Bn-=1){var Ln=t.current[Bn],gn=document.getElementById(Ln),In=gn.offsetTop-un-Nt;if(In<=V){T(Ln);return}}T(null)}return To()(E)},[]);return g.useEffect(function(){return zt.forEach(function(E){return window.addEventListener(E,O)}),O(),function(){zt.forEach(function(E){return window.removeEventListener(E,O)})}},[]),(0,n.jsx)("div",{className:w()(H,m&&X),ref:e,children:(0,n.jsx)(Po.Z,{activeKey:m,onChange:L,items:t.current.map(function(E){return{key:E,label:(0,n.jsx)("span",{className:Z,children:E.replace(/-/g," ")})}})})})},Io=Ao,Lt,Et,Tt,Pt=40,Ae=1208,Xe=24,Do=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{resourcePage:t(Lt||(Lt=f()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Ae),resourceContent:t(Et||(Et=f()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Pt,Ae,Xe,a),banner:t(Tt||(Tt=f()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Pt,Ae,Ae,Xe,Xe)}}),Ho=function(e){var t,a=e.children,l=Do(),u=l.styles,b=(0,c.eL)();return(0,n.jsx)(En.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(No.Z,{children:[(0,n.jsx)(wt,{}),(0,n.jsxs)("div",{id:"resources-page",className:u.resourcePage,children:[(0,n.jsx)(Io,{}),(0,n.jsxs)("div",{className:u.banner,children:[(0,n.jsxs)(Me.Z.Title,{style:{fontSize:30},children:[(t=b.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(jt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:b.frontmatter.filename})]}),(0,n.jsx)("section",{children:b.frontmatter.description})]}),(0,n.jsx)("div",{className:u.resourceContent,children:a}),(0,n.jsx)(ke,{})]})]})})},Oo=Ho,Zo=r(720841),Ro=r(538294),Bt=r(575054),Mt=r(796586),Fo=r(605071),Ve=r(945016),$o=r(217187),Ne=r(618073),At=r(206171),Wo=r(899242),Uo=r(566254),Go=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,c.yh)(),a=(0,an.Z)(),l=a.pathname,u=a.search,b=(0,c.tx)(),y=e.before,C=e.after,m=(0,g.useMemo)(function(){var T,I=pe()(b!=null?b:[]);if(l.startsWith("/docs/spec")){var P=I.splice(0,1);I.push.apply(I,pe()(P))}if(l.startsWith("/docs/react")){var H,X=(H=Object.entries(t).find(function(E){var z=j()(E,1),V=z[0];return V.startsWith("/changelog")}))===null||H===void 0?void 0:H[1];X&&I.splice(1,0,X[0])}if(l.startsWith("/changelog")){var Z,L=(Z=Object.entries(t).find(function(E){var z=j()(E,1),V=z[0];return V.startsWith("/docs/react")}))===null||Z===void 0?void 0:Z[1];L&&(I.unshift(L[0]),I.push.apply(I,pe()(L.slice(1))))}var O=function(z){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return z&&V&&(0,n.jsx)(Wo.Z,{color:z==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:z.replace("VERSION",Uo.Z)})};return(T=I==null?void 0:I.reduce(function(E,z){if(z!=null&&z.title)if(l.startsWith("/docs/spec")){var V,un,Bn=z.children.reduce(function(B,tn){var Cn,Rn,Mn=(Cn=(Rn=tn.frontmatter)===null||Rn===void 0?void 0:Rn.type)!==null&&Cn!==void 0?Cn:"default";return B[Mn]||(B[Mn]=[]),B[Mn].push(tn),B},{}),Ln=[];Ln.push.apply(Ln,pe()((V=(un=Bn.default)===null||un===void 0?void 0:un.map(function(B){return{label:(0,n.jsxs)(ee.Z,{to:"".concat(B.link).concat(u),children:[y,B==null?void 0:B.title,C]}),key:B.link.replace(/(-cn$)/g,"")}}))!==null&&V!==void 0?V:[])),Object.entries(Bn).forEach(function(B){var tn=j()(B,2),Cn=tn[0],Rn=tn[1];Cn!=="default"&&Ln.push({type:"group",label:Cn,key:Cn,children:Rn==null?void 0:Rn.map(function(Mn){return{label:(0,n.jsxs)(ee.Z,{to:"".concat(Mn.link).concat(u),children:[y,Mn==null?void 0:Mn.title,C]}),key:Mn.link.replace(/(-cn$)/g,"")}})})}),E.push({label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:Ln})}else{var gn;E.push({type:"group",label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:(gn=z.children)===null||gn===void 0?void 0:gn.map(function(B){var tn,Cn;return{label:(0,n.jsxs)(ee.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[y,(0,n.jsx)("span",{children:B==null?void 0:B.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(tn=B.frontmatter)===null||tn===void 0?void 0:tn.subtitle},"chinese"),O((Cn=B.frontmatter)===null||Cn===void 0?void 0:Cn.tag,!y&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})})}else{var In=z.children||[];In.every(function(B){var tn;return B==null||(tn=B.frontmatter)===null||tn===void 0?void 0:tn.date})&&In.sort(function(B,tn){return B.frontmatter.date>tn.frontmatter.date?-1:1}),E.push.apply(E,pe()(In.map(function(B){return{label:(0,n.jsxs)(ee.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[y,B==null?void 0:B.title,O(B.frontmatter.tag,!y&&!C),C]}),key:B.link.replace(/(-cn$)/g,"")}})))}return E},[]))!==null&&T!==void 0?T:[]},[b,t,l,u,e]);return[m,l]},It=Go,Dt,Ht,Ot,Zt,Xo=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.colorSplit,l=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:t(Dt||(Dt=f()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(Ht||(Ht=f()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,u),prevNav:t(Ot||(Ot=f()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(Zt||(Zt=f()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Vo=function i(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var l;return t.concat((l=i(a.children))!==null&&l!==void 0?l:[])}return t.concat(a)},[]):null},Ko=function(e){var t=e.rtl,a=Xo(),l=a.styles,u={className:"footer-nav-icon-before"},b={className:"footer-nav-icon-after"},y=t?(0,n.jsx)(Ne.Z,W()({},u)):(0,n.jsx)(At.Z,W()({},u)),C=t?(0,n.jsx)(At.Z,W()({},b)):(0,n.jsx)(Ne.Z,W()({},b)),m=It({before:y,after:C}),T=j()(m,2),I=T[0],P=T[1],H=(0,g.useContext)(Zn.Z),X=H.isMobile,Z=(0,g.useMemo)(function(){var z=Vo(I);if(!z)return[null,null];var V=-1;return z.forEach(function(un,Bn){un&&un.key===P&&(V=Bn)}),[z[V-1],z[V+1]]},[I,P]),L=j()(Z,2),O=L[0],E=L[1];return X?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[O&&g.cloneElement(O.label,{className:w()(l.pageNav,l.prevNav,O.className)}),E&&g.cloneElement(E.label,{className:w()(l.pageNav,l.nextNav,E.className)})]})},Yo=Ko,Jo=r(302281),Qo=r(15060),_o=r(889812),Rt,Ft,$t,qo=(0,S.kc)(function(i){var e=i.token,t=i.css;return{history:t(Rt||(Rt=f()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Ft||(Ft=f()([`
    // white-space: pre;
  `]))),ref:t($t||($t=f()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),nr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function er(i){var e=i.changelog,t=e===void 0?"":e,a=i.refs,l=a===void 0?[]:a,u=i.styles,b=g.useMemo(function(){for(var y=[],C=!1,m="",T=0;T<t.length;T+=1){var I=t[T];if(I!=="`")m+=I;else{var P=m;C&&(P=(0,n.jsx)("code",{children:P})),y.push(P),m="",C=!C}}return y.push(m),y},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:b}),l==null?void 0:l.map(function(y){var C;return(0,n.jsxs)("a",{className:u.ref,href:y,target:"_blank",rel:"noreferrer",children:["#",(C=y.match(/^.*\/(\d+)$/))===null||C===void 0?void 0:C[1]]},y)})]})}function tr(i,e){var t=(0,_o.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return r.e(2104).then(r.t.bind(r,332104,19))}}:{key:"component-changelog-en",request:function(){return r.e(5212).then(r.t.bind(r,365212,19))}});return(0,g.useMemo)(function(){var a=i.replace(/-/g,""),l=Object.keys(t).find(function(u){return u.toLowerCase()===a.toLowerCase()});return t[l]},[t,i])}function or(i){var e,t=i.pathname,a=t===void 0?"":t,l=(0,p.Z)(nr),u=j()(l,2),b=u[0],y=u[1],C=g.useState(!1),m=j()(C,2),T=m[0],I=m[1],P=qo(),H=P.styles,X=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",Z=tr(X,y),L=g.useMemo(function(){var O={};return Z==null||Z.forEach(function(E){O[E.version]=O[E.version]||[],O[E.version].push(E)}),Object.keys(O).map(function(E){var z=O[E];return{children:(0,n.jsxs)(Me.Z,{children:[(0,n.jsx)("h4",{children:E}),(0,n.jsx)("ul",{children:z.map(function(V,un){return(0,n.jsx)("li",{className:H.li,children:(0,n.jsx)(er,W()(W()({},V),{},{styles:H}))},un)})})]})}})},[Z]);return!Z||!Z.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ue.ZP,{className:H.history,icon:(0,n.jsx)(q.Z,{}),onClick:function(){I(!0)},children:b.changelog}),(0,n.jsx)(Jo.Z,{title:b.changelog,extra:(0,n.jsx)(ee.Z,{style:{fontSize:14},to:"/changelog".concat(y==="cn"?"-cn":""),children:b.full}),open:T,width:"40vw",onClose:function(){I(!1)},destroyOnClose:!0,children:(0,n.jsx)(Qo.Z,{items:L})})]})}var rr=function(i){return(0,n.jsx)(g.Suspense,{fallback:null,children:(0,n.jsx)(or,W()({},i))})},ar=r(524229),Wt=r(211646),ir=r(294047),Ut=r(315816),lr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Gt=lr,Xt,Vt,Kt,Yt,Jt,Qt,_t,Ke="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",sr=(0,S.kc)(function(i){var e=i.token,t=i.css;return{card:t(Xt||(Xt=f()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Vt||(Vt=f()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Kt||(Kt=f()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Yt||(Yt=f()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Jt||(Jt=f()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Qt||(Qt=f()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(_t||(_t=f()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),cr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},dr=function(e){var t=e.zhihuLink,a=e.yuqueLink,l=e.juejinLink,u=(0,p.Z)(cr),b=j()(u,1),y=b[0],C=sr(),m=C.styles,T=m.card,I=m.bigTitle,P=m.cardBody,H=m.left,X=m.title,Z=m.subTitle,L=m.btn;return!t&&!a&&!l?null:(0,n.jsxs)(ir.Z,{className:T,bordered:!1,children:[(0,n.jsx)("h3",{className:I,children:y.bigTitle}),t&&(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:Ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:X,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(yn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:y.zhiHu})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:L,icon:(0,n.jsx)(yn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:y.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ut.Z,{}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:Ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:X,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Wt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:y.yuQue})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:L,icon:(0,n.jsx)(Wt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:y.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ut.Z,{}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:Ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:X,children:"Ant Design"}),(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)(Gt,{className:"logo juejin-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(ue.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:y.junjin})]})]})]}),(0,n.jsx)(ue.ZP,{type:"primary",className:L,icon:(0,n.jsx)(Gt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:y.buttonText})]})]})]})},ur=dr,qt,no,eo,to,oo,pr=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{contributorsList:t(qt||(qt=f()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),a,a,e.motionDurationSlow,a),listMobile:t(no||(no=f()([`
      margin: 1em 0 !important;
    `]))),toc:t(eo||(eo=f()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(to||(to=f()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(oo||(oo=f()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),mr=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(l,u){return(0,n.jsx)(Bt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:u===0?0:-8}},u)})})},hr=function(e){var t=e.name,a=e.avatar,l=(0,g.useState)(!0),u=j()(l,2),b=u[0],y=u[1],C=(0,g.useState)(!1),m=j()(C,2),T=m[0],I=m[1];return(0,g.useLayoutEffect)(function(){var P=new Image;P.src=a,P.onload=function(){return y(!1)},P.onerror=function(){return I(!0)}},[]),T?null:b?(0,n.jsx)(Bt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Mt.C,{size:"small",src:a,alt:t,children:t})},gr=function(e){var t,a,l,u,b,y,C=e.children,m=(0,c.eL)(),T=(0,c.zh)(),I=(0,an.Z)(),P=I.pathname,H=I.hash,X=(0,c.YB)(),Z=X.formatMessage,L=pr(),O=L.styles,E=(0,S.Fg)(),z=(0,g.useContext)(Zn.Z),V=z.direction,un=z.isMobile,Bn=(0,$o.Z)(!1),Ln=j()(Bn,2),gn=Ln[0],In=Ln[1],B=(0,g.useMemo)(function(){var Y;return((Y=m.toc)===null||Y===void 0?void 0:Y.filter(function(_){return _._debug_demo}).map(function(_){return _.id}))||[]},[m]),tn=B.includes(H.slice(1));(0,g.useLayoutEffect)(function(){In(tn)},[]);var Cn=(0,g.useMemo)(function(){return{showDebug:gn,setShowDebug:In}},[gn,B]),Rn=(0,g.useMemo)(function(){return((T==null?void 0:T.toc)||m.toc).reduce(function(Y,_){if(_.depth===2)Y.push(W()({},_));else if(_.depth===3){var Sn=Y[Y.length-1];Sn&&(Sn.children=Sn.children||[],Sn.children.push(W()({},_)))}return Y},[])},[T==null?void 0:T.toc,m.toc]),Mn=V==="rtl",Ie=(0,g.useMemo)(function(){var Y=m.frontmatter.author;return Y?typeof Y=="string"?Y.split(",").map(function(_){return{name:_,avatar:"https://github.com/".concat(_,".png")}}):Array.isArray(Y)?Y:[]:[]},[m.frontmatter.author]);return(0,n.jsx)(ar.Z.Provider,{value:Cn,children:(0,n.jsxs)(je.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!m.frontmatter.toc&&(0,n.jsx)("section",{className:O.tocWrapper,children:(0,n.jsx)(Fo.Z,{className:O.toc,affix:!1,targetOffset:E.marginXXL,showInkInFixed:!0,items:Rn.map(function(Y){var _;return{href:"#".concat(Y.id),title:Y.title,key:Y.id,children:(_=Y.children)===null||_===void 0?void 0:_.filter(function(Sn){return gn||!B.includes(Sn.id)}).map(function(Sn){return{key:Sn.id,href:"#".concat(Sn.id),title:(0,n.jsx)("span",{className:w()(B.includes(Sn.id)&&"toc-debug"),children:Sn==null?void 0:Sn.title})}})}})})}),(0,n.jsxs)("article",{className:w()(O.articleWrapper,{rtl:Mn}),children:[(t=m.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Me.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Ve.Z,{size:"small",children:[(a=m.frontmatter)===null||a===void 0?void 0:a.title,(l=m.frontmatter)===null||l===void 0?void 0:l.subtitle,!P.startsWith("/components/overview")&&(0,n.jsx)(jt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})]}),P.startsWith("/components/")&&(0,n.jsx)(rr,{pathname:P})]}):null,m.frontmatter.date||m.frontmatter.author?(0,n.jsx)(Me.Z.Paragraph,{children:(0,n.jsxs)(Ve.Z,{children:[m.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Zo.Z,{})," ",pn()(m.frontmatter.date).format("YYYY-MM-DD")]}),Ie.map(function(Y){return(0,n.jsx)("a",{href:"https://github.com/".concat(Y.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Ve.Z,{size:3,children:[(0,n.jsx)(hr,{name:Y.name,avatar:Y.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",Y.name]})]})},Y.name)})]})}):null,!m.frontmatter.__autoDescription&&m.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(((u=m.frontmatter)===null||u===void 0?void 0:u.zhihu_url)||((b=m.frontmatter)===null||b===void 0?void 0:b.yuque_url)||((y=m.frontmatter)===null||y===void 0?void 0:y.juejin_url))&&(0,n.jsx)(ur,{zhihuLink:m.frontmatter.zhihu_url,yuqueLink:m.frontmatter.yuque_url,juejinLink:m.frontmatter.juejin_url}),m.frontmatter.filename&&(0,n.jsx)(Ro.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:w()(O.contributorsList,we()({},O.listMobile,un)),fileName:m.frontmatter.filename,renderItem:function(_,Sn){var me;return!_||Sn?(0,n.jsx)(mr,{}):(me=_.username)!==null&&me!==void 0&&me.includes("github-actions")?null:(0,n.jsx)(st.Z,{mouseEnterDelay:.3,title:"".concat(Z({id:"app.content.contributors"}),": ").concat(_.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(_.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Mt.C,{size:"small",src:_.url,alt:_.username,children:_.username})})})},_.username)}})]}),(0,n.jsx)(Yo,{rtl:Mn}),(0,n.jsx)(ke,{})]})})},fr=gr,xr=r(650010),ro,ao,vr=(0,S.kc)(function(i){var e=i.token,t=i.css,a=e.antCls,l=e.fontFamily,u=e.colorSplit;return{asideContainer:t(ro||(ro=f()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,a,a,a,a,a,a,u,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(ao||(ao=f()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),br=function(){var e=(0,c.tx)(),t=(0,g.useContext)(Zn.Z),a=t.isMobile,l=t.theme,u=vr(),b=u.styles,y=It(),C=j()(y,2),m=C[0],T=C[1],I=l.includes("dark"),P=(0,S.Fg)(),H=P.colorBgContainer,X=(0,n.jsx)(En.ZP,{theme:{components:{Menu:{itemBg:H,darkItemBg:H}}},children:(0,n.jsx)(at.Z,{items:m,inlineIndent:30,className:b.asideContainer,mode:"inline",theme:I?"dark":"light",selectedKeys:[T],defaultOpenKeys:e==null?void 0:e.map(function(Z){var L=Z.title;return L}).filter(function(Z){return Z})})});return a?(0,n.jsx)(xr.Z,{children:X},"Mobile-menu"):(0,n.jsx)(je.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:b.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:X})})},yr=br,io,wr=(0,S.kc)(function(i){var e=i.css,t=i.token;return{main:e(io||(io=f()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),jr=function(e){var t=e.children,a=wr(),l=a.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(wt,{}),(0,n.jsx)(yr,{}),(0,n.jsx)(fr,{children:t})]})},Cr=jr,Sr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},kr=function(){var e=(0,c.pC)(),t=(0,an.Z)(),a=t.pathname,l=t.search,u=t.hash,b=(0,p.Z)(Sr),y=j()(b,2),C=y[0],m=y[1],T=(0,g.useRef)(null),I=(0,g.useContext)(Zn.Z),P=I.direction,H=(0,c.WF)(),X=H.loading;(0,g.useLayoutEffect)(function(){m==="cn"?pn().locale("zh-cn"):pn().locale("en")},[]),(0,g.useEffect)(function(){var L=document.getElementById("nprogress-style");L&&(T.current=setTimeout(function(){var O;(O=L.parentNode)===null||O===void 0||O.removeChild(L)},0))},[]),(0,g.useEffect)(function(){var L,O=u.replace("#","");O&&((L=document.getElementById(decodeURIComponent(O)))===null||L===void 0||L.scrollIntoView())},[X,u]),g.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+l),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",a+l])},[t]);var Z=(0,g.useMemo)(function(){return["","/"].some(function(L){return L===a})||["/index"].some(function(L){return a.startsWith(L)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ke,{})]}):a.startsWith("/docs/resource")?(0,n.jsx)(Oo,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(Cr,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:m==="cn"?"zh-CN":m,"data-direction":P,className:w()({rtl:P==="rtl"})}),(0,n.jsx)("title",{children:C==null?void 0:C.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:C.description}),(0,n.jsx)("meta",{property:"og:title",content:C==null?void 0:C.title}),(0,n.jsx)("meta",{property:"og:description",content:C.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(En.ZP,{direction:P,locale:m==="cn"?F.Z:void 0,children:[(0,n.jsx)(mn,{}),(0,n.jsx)(zo,{}),Z]})]})},zr=kr},647727:function(he,kn,r){r.d(kn,{Z:function(){return fn.Z}});var fn=r(332231)},605071:function(he,kn,r){r.d(kn,{Z:function(){return $}});var fn=r(97857),j=r.n(fn),xn=r(9783),w=r.n(xn),Fn=r(719632),pn=r.n(Fn),$n=r(805574),c=r.n($n),g=r(294184),F=r.n(g),En=r(318545),p=r(667294),an=r(517423),Kn=r(982673),f=r(658192),M=r(252901),S=r(73287),n=p.createContext(void 0),Dn=n,zn=r(785893),oe=function(o){var s=o.href,v=o.title,k=o.prefixCls,N=o.children,D=o.className,A=o.target,x=o.replace,U=p.useContext(Dn),G=U||{},J=G.registerLink,nn=G.unregisterLink,rn=G.scrollTo,en=G.onClick,ln=G.activeLink,R=G.direction;p.useEffect(function(){return J==null||J(s),function(){nn==null||nn(s)}},[s]);var vn=function(An){x&&(An.preventDefault(),window.location.replace(s)),en==null||en(An,{title:v,href:s}),rn==null||rn(s)},Q=p.useContext(S.E_),mn=Q.getPrefixCls,Nn=mn("anchor",k),hn=ln===s,sn=F()("".concat(Nn,"-link"),D,w()({},"".concat(Nn,"-link-active"),hn)),yn=F()("".concat(Nn,"-link-title"),w()({},"".concat(Nn,"-link-title-active"),hn));return(0,zn.jsxs)("div",{className:sn,children:[(0,zn.jsx)("a",{className:yn,href:s,title:typeof v=="string"?v:"",target:A,onClick:vn,children:v}),R!=="horizontal"?N:null]})},Wn=oe,Hn=r(548073),re=r(141035),Yn=r(986943),Jn=function(o){var s,v,k=o.componentCls,N=o.holderOffsetBlock,D=o.motionDurationSlow,A=o.lineWidthBold,x=o.colorPrimary,U=o.lineType,G=o.colorSplit;return w()({},"".concat(k,"-wrapper"),(v={marginBlockStart:-N,paddingBlockStart:N},w()(v,k,j()(j()({},(0,Hn.Wf)(o)),{},w()({position:"relative",paddingInlineStart:A},"".concat(k,"-link"),(s={paddingBlock:o.linkPaddingBlock,paddingInline:"".concat(o.linkPaddingInlineStart,"px 0"),"&-title":j()(j()({},Hn.vS),{},{position:"relative",display:"block",marginBlockEnd:o.anchorTitleBlock,color:o.colorText,transition:"all ".concat(o.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},w()(s,"&-active > ".concat(k,"-link-title"),{color:o.colorPrimary}),w()(s,"".concat(k,"-link"),{paddingBlock:o.anchorPaddingBlockSecondary}),s)))),w()(v,"&:not(".concat(k,"-wrapper-horizontal)"),w()({},k,w()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(A,"px ").concat(U," ").concat(G),content:'" "'}},"".concat(k,"-ink"),w()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(D," ease-in-out"),width:A,backgroundColor:x},"&".concat(k,"-ink-visible"),{display:"inline-block"})))),w()(v,"".concat(k,"-fixed ").concat(k,"-ink ").concat(k,"-ink"),{display:"none"}),v))},Qn=function(o){var s,v=o.componentCls,k=o.motionDurationSlow,N=o.lineWidthBold,D=o.colorPrimary;return w()({},"".concat(v,"-wrapper-horizontal"),w()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(o.lineType," ").concat(o.colorSplit),content:'" "'}},v,(s={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},w()(s,"".concat(v,"-link:first-of-type"),{paddingInline:0}),w()(s,"".concat(v,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(k," ease-in-out, width ").concat(k," ease-in-out"),height:N,backgroundColor:D}),s)))},Un=(0,re.Z)("Anchor",function(h){var o=h.fontSize,s=h.fontSizeLG,v=h.paddingXXS,k=(0,Yn.TS)(h,{holderOffsetBlock:v,anchorPaddingBlockSecondary:v/2,anchorTitleBlock:o/14*3,anchorBallSize:s/2});return[Jn(k),Qn(k)]},function(h){return{linkPaddingBlock:h.paddingXXS,linkPaddingInlineStart:h.padding}});function On(){return window}function _n(h,o){if(!h.getClientRects().length)return 0;var s=h.getBoundingClientRect();return s.width||s.height?o===window?(o=h.ownerDocument.documentElement,s.top-o.clientTop):s.top-o.getBoundingClientRect().top:s.top}var Tn=/#([\S ]+)$/,ge=function(o){var s,v,k=o.rootClassName,N=o.anchorPrefixCls,D=o.className,A=o.style,x=o.offsetTop,U=o.affix,G=U===void 0?!0:U,J=o.showInkInFixed,nn=J===void 0?!1:J,rn=o.children,en=o.items,ln=o.direction,R=ln===void 0?"vertical":ln,vn=o.bounds,Q=o.targetOffset,mn=o.onClick,Nn=o.onChange,hn=o.getContainer,sn=o.getCurrentAnchor,yn=o.replace,ae=p.useState([]),An=c()(ae,2),q=An[0],wn=An[1],Gn=p.useState(null),ce=c()(Gn,2),qn=ce[0],fe=ce[1],ie=p.useRef(qn),ye=p.useRef(null),Zn=p.useRef(null),xe=p.useRef(!1),ne=p.useContext(S.E_),De=ne.direction,He=ne.getTargetContainer,le=ne.anchor,de=(s=hn!=null?hn:He)!==null&&s!==void 0?s:On,Se=JSON.stringify(q),Oe=(0,En.default)(function(K){q.includes(K)||wn(function(cn){return[].concat(pn()(cn),[K])})}),Ze=(0,En.default)(function(K){q.includes(K)&&wn(function(cn){return cn.filter(function(dn){return dn!==K})})}),ke=function(){var cn,dn=(cn=ye.current)===null||cn===void 0?void 0:cn.querySelector(".".concat(N,"-link-title-active"));if(dn&&Zn.current){var Xn=Zn.current.style,Pn=R==="horizontal";Xn.top=Pn?"":"".concat(dn.offsetTop+dn.clientHeight/2,"px"),Xn.height=Pn?"":"".concat(dn.clientHeight,"px"),Xn.left=Pn?"".concat(dn.offsetLeft,"px"):"",Xn.width=Pn?"".concat(dn.clientWidth,"px"):"",Pn&&(0,an.Z)(dn,{scrollMode:"if-needed",block:"nearest"})}},Re=function(cn){var dn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Xn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Pn=[],jn=de();if(cn.forEach(function(Vn){var be=Tn.exec(Vn==null?void 0:Vn.toString());if(be){var Pe=document.getElementById(be[1]);if(Pe){var Be=_n(Pe,jn);Be<dn+Xn&&Pn.push({link:Vn,top:Be})}}}),Pn.length){var ve=Pn.reduce(function(Vn,be){return be.top>Vn.top?be:Vn});return ve.link}return""},W=(0,En.default)(function(K){if(ie.current!==K){var cn=typeof sn=="function"?sn(K):K;fe(cn),ie.current=cn,Nn==null||Nn(K)}}),ze=p.useCallback(function(){if(!xe.current){var K=Re(q,Q!==void 0?Q:x||0,vn);W(K)}},[Se,Q,x]),we=p.useCallback(function(K){W(K);var cn=Tn.exec(K);if(cn){var dn=document.getElementById(cn[1]);if(dn){var Xn=de(),Pn=(0,Kn.Z)(Xn,!0),jn=_n(dn,Xn),ve=Pn+jn;ve-=Q!==void 0?Q:x||0,xe.current=!0,(0,f.Z)(ve,{getContainer:de,callback:function(){xe.current=!1}})}}},[Q,x]),Ee=F()(k,"".concat(N,"-wrapper"),(v={},w()(v,"".concat(N,"-wrapper-horizontal"),R==="horizontal"),w()(v,"".concat(N,"-rtl"),De==="rtl"),v),D,le==null?void 0:le.className),Fe=F()(N,w()({},"".concat(N,"-fixed"),!G&&!nn)),$e=F()("".concat(N,"-ink"),w()({},"".concat(N,"-ink-visible"),qn)),We=j()(j()({maxHeight:x?"calc(100vh - ".concat(x,"px)"):"100vh"},le==null?void 0:le.style),A),Ue=function K(cn){return Array.isArray(cn)?cn.map(function(dn){return(0,p.createElement)(Wn,j()(j()({replace:yn},dn),{},{key:dn.key}),R==="vertical"&&K(dn.children))}):null},Te=(0,zn.jsx)("div",{ref:ye,className:Ee,style:We,children:(0,zn.jsxs)("div",{className:Fe,children:[(0,zn.jsx)("span",{className:$e,ref:Zn}),"items"in o?Ue(en):rn]})});p.useEffect(function(){var K=de();return ze(),K==null||K.addEventListener("scroll",ze),function(){K==null||K.removeEventListener("scroll",ze)}},[Se]),p.useEffect(function(){typeof sn=="function"&&W(sn(ie.current||""))},[sn]),p.useEffect(function(){ke()},[R,sn,Se,qn]);var je=p.useMemo(function(){return{registerLink:Oe,unregisterLink:Ze,scrollTo:we,activeLink:qn,onClick:mn,direction:R}},[qn,mn,we,R]);return(0,zn.jsx)(Dn.Provider,{value:je,children:G?(0,zn.jsx)(M.Z,{offsetTop:x,target:de,children:Te}):Te})},se=function(o){var s=o.prefixCls,v=o.rootClassName,k=p.useContext(S.E_),N=k.getPrefixCls,D=N("anchor",s),A=Un(D),x=c()(A,2),U=x[0],G=x[1];return U((0,zn.jsx)(ge,j()(j()({},o),{},{rootClassName:F()(G,v),anchorPrefixCls:D})))},bn=se,d=bn;d.Link=Wn;var $=d},302281:function(he,kn,r){r.d(kn,{Z:function(){return se}});var fn=r(97857),j=r.n(fn),xn=r(9783),w=r.n(xn),Fn=r(805574),pn=r.n(Fn),$n=r(513769),c=r.n($n),g=r(294184),F=r.n(g),En=r(650010),p=r(667294),an=r(851863),Kn=r(73287),f=r(976883),M=r(46287),S=r(785893),n=function(d){var $=d.prefixCls,h=d.title,o=d.footer,s=d.extra,v=d.closeIcon,k=d.closable,N=d.onClose,D=d.headerStyle,A=d.drawerStyle,x=d.bodyStyle,U=d.footerStyle,G=d.children,J=p.useCallback(function(Q){return(0,S.jsx)("button",{type:"button",onClick:N,"aria-label":"Close",className:"".concat($,"-close"),children:Q})},[N]),nn=(0,M.Z)(k,v,J,void 0,!0),rn=pn()(nn,2),en=rn[0],ln=rn[1],R=p.useMemo(function(){return!h&&!en?null:(0,S.jsxs)("div",{style:D,className:F()("".concat($,"-header"),w()({},"".concat($,"-header-close-only"),en&&!h&&!s)),children:[(0,S.jsxs)("div",{className:"".concat($,"-header-title"),children:[ln,h&&(0,S.jsx)("div",{className:"".concat($,"-title"),children:h})]}),s&&(0,S.jsx)("div",{className:"".concat($,"-extra"),children:s})]})},[en,ln,s,D,$,h]),vn=p.useMemo(function(){if(!o)return null;var Q="".concat($,"-footer");return(0,S.jsx)("div",{className:Q,style:U,children:o})},[o,U,$]);return(0,S.jsxs)("div",{className:"".concat($,"-wrapper-body"),style:A,children:[R,(0,S.jsx)("div",{className:"".concat($,"-body"),style:x,children:G}),vn]})},Dn=n,zn=r(578294),oe=r(141035),Wn=r(986943),Hn=function(d){var $,h=d.componentCls,o=d.motionDurationSlow,s={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(o)}}};return w()({},h,($={},w()($,"".concat(h,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(o)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),w()($,"".concat(h,"-panel-motion"),{"&-left":[s,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[s,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[s,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[s,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),$))},re=Hn,Yn=function(d){var $,h,o=d.componentCls,s=d.zIndexPopup,v=d.colorBgMask,k=d.colorBgElevated,N=d.motionDurationSlow,D=d.motionDurationMid,A=d.padding,x=d.paddingLG,U=d.fontSizeLG,G=d.lineHeightLG,J=d.lineWidth,nn=d.lineType,rn=d.colorSplit,en=d.marginSM,ln=d.colorIcon,R=d.colorIconHover,vn=d.colorText,Q=d.fontWeightStrong,mn=d.footerPaddingBlock,Nn=d.footerPaddingInline,hn="".concat(o,"-content-wrapper");return w()({},o,(h={position:"fixed",inset:0,zIndex:s,pointerEvents:"none","&-pure":($={position:"relative",background:k},w()($,"&".concat(o,"-left"),{boxShadow:d.boxShadowDrawerLeft}),w()($,"&".concat(o,"-right"),{boxShadow:d.boxShadowDrawerRight}),w()($,"&".concat(o,"-top"),{boxShadow:d.boxShadowDrawerUp}),w()($,"&".concat(o,"-bottom"),{boxShadow:d.boxShadowDrawerDown}),$),"&-inline":{position:"absolute"}},w()(h,"".concat(o,"-mask"),{position:"absolute",inset:0,zIndex:s,background:v,pointerEvents:"auto"}),w()(h,hn,{position:"absolute",zIndex:s,maxWidth:"100vw",transition:"all ".concat(N),"&-hidden":{display:"none"}}),w()(h,"&-left > ".concat(hn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:d.boxShadowDrawerLeft}),w()(h,"&-right > ".concat(hn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:d.boxShadowDrawerRight}),w()(h,"&-top > ".concat(hn),{top:0,insetInline:0,boxShadow:d.boxShadowDrawerUp}),w()(h,"&-bottom > ".concat(hn),{bottom:0,insetInline:0,boxShadow:d.boxShadowDrawerDown}),w()(h,"".concat(o,"-content"),{width:"100%",height:"100%",overflow:"auto",background:k,pointerEvents:"auto"}),w()(h,"".concat(o,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),w()(h,"".concat(o,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(A,"px ").concat(x,"px"),fontSize:U,lineHeight:G,borderBottom:"".concat(J,"px ").concat(nn," ").concat(rn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),w()(h,"".concat(o,"-extra"),{flex:"none"}),w()(h,"".concat(o,"-close"),{display:"inline-block",marginInlineEnd:en,color:ln,fontWeight:Q,fontSize:U,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(D),textRendering:"auto","&:focus, &:hover":{color:R,textDecoration:"none"}}),w()(h,"".concat(o,"-title"),{flex:1,margin:0,color:vn,fontWeight:d.fontWeightStrong,fontSize:U,lineHeight:G}),w()(h,"".concat(o,"-body"),{flex:1,minWidth:0,minHeight:0,padding:x,overflow:"auto"}),w()(h,"".concat(o,"-footer"),{flexShrink:0,padding:"".concat(mn,"px ").concat(Nn,"px"),borderTop:"".concat(J,"px ").concat(nn," ").concat(rn)}),w()(h,"&-rtl",{direction:"rtl"}),h))},Jn=(0,oe.Z)("Drawer",function(bn){var d=(0,Wn.TS)(bn,{});return[Yn(d),re(d)]},function(bn){return{zIndexPopup:bn.zIndexPopupBase,footerPaddingBlock:bn.paddingXS,footerPaddingInline:bn.padding}}),Qn=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],Un=["prefixCls","style","className","placement"],On=null,_n={distance:180},Tn=function(d){var $=d.rootClassName,h=d.width,o=d.height,s=d.size,v=s===void 0?"default":s,k=d.mask,N=k===void 0?!0:k,D=d.push,A=D===void 0?_n:D,x=d.open,U=d.afterOpenChange,G=d.onClose,J=d.prefixCls,nn=d.getContainer,rn=d.style,en=d.className,ln=d.visible,R=d.afterVisibleChange,vn=c()(d,Qn),Q=p.useContext(Kn.E_),mn=Q.getPopupContainer,Nn=Q.getPrefixCls,hn=Q.direction,sn=Q.drawer,yn=Nn("drawer",J),ae=Jn(yn),An=pn()(ae,2),q=An[0],wn=An[1],Gn=nn===void 0&&mn?function(){return mn(document.body)}:nn,ce=F()(w()({"no-mask":!N},"".concat(yn,"-rtl"),hn==="rtl"),$,wn);if(!1)var qn;var fe=p.useMemo(function(){return h!=null?h:v==="large"?736:378},[h,v]),ie=p.useMemo(function(){return o!=null?o:v==="large"?736:378},[o,v]),ye={motionName:(0,an.m)(yn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Zn=function(ne){return{motionName:(0,an.m)(yn,"panel-motion-".concat(ne)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return q((0,S.jsx)(zn.BR,{children:(0,S.jsx)(f.Ux,{status:!0,override:!0,children:(0,S.jsx)(En.Z,j()(j()({prefixCls:yn,onClose:G,maskMotion:ye,motion:Zn},vn),{},{open:x!=null?x:ln,mask:N,push:A,width:fe,height:ie,style:j()(j()({},sn==null?void 0:sn.style),rn),className:F()(sn==null?void 0:sn.className,en),rootClassName:ce,getContainer:Gn,afterOpenChange:U!=null?U:R,children:(0,S.jsx)(Dn,j()(j()({prefixCls:yn},vn),{},{onClose:G}))}))})}))},ge=function(d){var $=d.prefixCls,h=d.style,o=d.className,s=d.placement,v=s===void 0?"right":s,k=c()(d,Un),N=p.useContext(Kn.E_),D=N.getPrefixCls,A=D("drawer",$),x=Jn(A),U=pn()(x,2),G=U[0],J=U[1],nn=F()(A,"".concat(A,"-pure"),"".concat(A,"-").concat(v),J,o);return G((0,S.jsx)("div",{className:nn,style:h,children:(0,S.jsx)(Dn,j()({prefixCls:A},k))}))};Tn._InternalPanelDoNotUseOrYouWillBeFired=ge;var se=Tn},377376:function(he,kn,r){var fn=r(83996),j=r(296708),xn=fn.ZP;xn.Header=fn.h4,xn.Footer=fn.$_,xn.Content=fn.VY,xn.Sider=j.Z,kn.Z=xn},715778:function(he,kn,r){r.d(kn,{Z:function(){return p}});var fn=r(174219),j=r(97857),xn=r.n(j),w=r(585369),Fn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},pn=Fn,$n={lang:xn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:xn()({},pn)};$n.lang.ok="\u786E\u5B9A";var c=$n,g=c,F="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",En={locale:"zh-cn",Pagination:fn.Z,DatePicker:c,TimePicker:pn,Calendar:g,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:F,method:F,array:F,object:F,number:F,date:F,boolean:F,integer:F,float:F,regexp:F,email:F,url:F,hex:F},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},p=En},15060:function(he,kn,r){r.d(kn,{Z:function(){return $}});var fn=r(97857),j=r.n(fn),xn=r(805574),w=r.n(xn),Fn=r(513769),pn=r.n(Fn),$n=r(294184),c=r.n($n),g=r(667294),F=r(73287),En=r(9783),p=r.n(En),an=r(785893),Kn=["prefixCls","className","color","dot","pending","position","label","children"],f=function(o){var s,v=o.prefixCls,k=o.className,N=o.color,D=N===void 0?"blue":N,A=o.dot,x=o.pending,U=x===void 0?!1:x,G=o.position,J=o.label,nn=o.children,rn=pn()(o,Kn),en=g.useContext(F.E_),ln=en.getPrefixCls,R=ln("timeline",v),vn=c()("".concat(R,"-item"),p()({},"".concat(R,"-item-pending"),U),k),Q=/blue|red|green|gray/.test(D||"")?void 0:D,mn=c()("".concat(R,"-item-head"),(s={},p()(s,"".concat(R,"-item-head-custom"),!!A),p()(s,"".concat(R,"-item-head-").concat(D),!Q),s));return(0,an.jsxs)("li",j()(j()({},rn),{},{className:vn,children:[J&&(0,an.jsx)("div",{className:"".concat(R,"-item-label"),children:J}),(0,an.jsx)("div",{className:"".concat(R,"-item-tail")}),(0,an.jsx)("div",{className:mn,style:{borderColor:Q,color:Q},children:A}),(0,an.jsx)("div",{className:"".concat(R,"-item-content"),children:nn})]}))},M=f,S=r(719632),n=r.n(S),Dn=r(100628),zn=r.n(Dn),oe=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],Wn=["className"],Hn=function(o){var s,v=o.prefixCls,k=o.className,N=o.pending,D=N===void 0?!1:N,A=o.children,x=o.items,U=o.rootClassName,G=o.reverse,J=G===void 0?!1:G,nn=o.direction,rn=o.hashId,en=o.pendingDot,ln=o.mode,R=ln===void 0?"":ln,vn=pn()(o,oe),Q=function(wn,Gn){return R==="alternate"?wn==="right"?"".concat(v,"-item-right"):wn==="left"||Gn%2===0?"".concat(v,"-item-left"):"".concat(v,"-item-right"):R==="left"?"".concat(v,"-item-left"):R==="right"||wn==="right"?"".concat(v,"-item-right"):""},mn=n()(x||[]),Nn=typeof D=="boolean"?null:D;D&&mn.push({pending:!!D,dot:en||(0,an.jsx)(zn(),{}),children:Nn}),J&&mn.reverse();var hn=mn.length,sn="".concat(v,"-item-last"),yn=mn.filter(function(q){return!!q}).map(function(q,wn){var Gn,ce=wn===hn-2?sn:"",qn=wn===hn-1?sn:"",fe=q.className,ie=pn()(q,Wn);return(0,g.createElement)(M,j()(j()({},ie),{},{className:c()([fe,!J&&D?ce:qn,Q((Gn=q==null?void 0:q.position)!==null&&Gn!==void 0?Gn:"",wn)]),key:(q==null?void 0:q.key)||wn}))}),ae=mn.some(function(q){return!!(q!=null&&q.label)}),An=c()(v,(s={},p()(s,"".concat(v,"-pending"),!!D),p()(s,"".concat(v,"-reverse"),!!J),p()(s,"".concat(v,"-").concat(R),!!R&&!ae),p()(s,"".concat(v,"-label"),ae),p()(s,"".concat(v,"-rtl"),nn==="rtl"),s),k,U,rn);return(0,an.jsx)("ul",j()(j()({},vn),{},{className:An,children:yn}))},re=Hn,Yn=r(45598);function Jn(h,o){return h&&Array.isArray(h)?h:(0,Yn.default)(o).map(function(s){var v,k;return j()({children:(v=s==null||(k=s.props)===null||k===void 0?void 0:k.children)!==null&&v!==void 0?v:""},s.props)})}var Qn=Jn,Un=r(548073),On=r(141035),_n=r(986943),Tn=function(o){var s,v,k,N,D,A,x=o.componentCls;return p()({},x,j()(j()({},(0,Un.Wf)(o)),{},(A={margin:0,padding:0,listStyle:"none"},p()(A,"".concat(x,"-item"),{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:(o.itemHeadSize-o.tailWidth)/2,height:"calc(100% - ".concat(o.itemHeadSize,"px)"),borderInlineStart:"".concat(o.tailWidth,"px ").concat(o.lineType," ").concat(o.tailColor)},"&-pending":(s={},p()(s,"".concat(x,"-item-head"),{fontSize:o.fontSizeSM,backgroundColor:"transparent"}),p()(s,"".concat(x,"-item-tail"),{display:"none"}),s),"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:"".concat(o.dotBorderWidth,"px ").concat(o.lineType," transparent"),borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:o.itemHeadSize/2,insetInlineStart:o.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.lineWidth,marginInlineStart:o.margin+o.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(v={},p()(v,"> ".concat(x,"-item-tail"),{display:"none"}),p()(v,"> ".concat(x,"-item-content"),{minHeight:o.controlHeightLG*1.2}),v)}),p()(A,"&".concat(x,`-alternate,
        &`).concat(x,`-right,
        &`).concat(x,"-label"),p()({},"".concat(x,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(o.marginXXS,"px"),"&-custom":{marginInlineStart:o.tailWidth/2}},"&-left":p()({},"".concat(x,"-item-content"),{insetInlineStart:"calc(50% - ".concat(o.marginXXS,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"}),"&-right":p()({},"".concat(x,"-item-content"),{width:"calc(50% - ".concat(o.marginSM,"px)"),margin:0,textAlign:"end"})})),p()(A,"&".concat(x,"-right"),p()({},"".concat(x,"-item-right"),(k={},p()(k,"".concat(x,`-item-tail,
            `).concat(x,`-item-head,
            `).concat(x,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((o.itemHeadSize+o.tailWidth)/2,"px)")}),p()(k,"".concat(x,"-item-content"),{width:"calc(100% - ".concat(o.itemHeadSize+o.marginXS,"px)")}),k))),p()(A,"&".concat(x,`-pending
        `).concat(x,`-item-last
        `).concat(x,"-item-tail"),{display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),p()(A,"&".concat(x,`-reverse
        `).concat(x,`-item-last
        `).concat(x,"-item-tail"),{display:"none"}),p()(A,"&".concat(x,"-reverse ").concat(x,"-item-pending"),(N={},p()(N,"".concat(x,"-item-tail"),{insetBlockStart:o.margin,display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),p()(N,"".concat(x,"-item-content"),{minHeight:o.controlHeightLG*1.2}),N)),p()(A,"&".concat(x,"-label"),(D={},p()(D,"".concat(x,"-item-label"),{position:"absolute",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.tailWidth,width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"end"}),p()(D,"".concat(x,"-item-right"),p()({},"".concat(x,"-item-label"),{insetInlineStart:"calc(50% + ".concat(o.marginSM,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"})),D)),p()(A,"&-rtl",p()({direction:"rtl"},"".concat(x,"-item-head-custom"),{transform:"translate(50%, -50%)"})),A)))},ge=(0,On.Z)("Timeline",function(h){var o=(0,_n.TS)(h,{itemHeadSize:10,customHeadPaddingVertical:h.paddingXXS,paddingInlineEnd:2});return[Tn(o)]},function(h){return{tailColor:h.colorSplit,tailWidth:h.lineWidthBold,dotBorderWidth:h.wireframe?h.lineWidthBold:h.lineWidth*3,dotBg:h.colorBgContainer,itemPaddingBottom:h.padding*1.25}}),se=["prefixCls","children","items","className","style"],bn=function(o){var s=g.useContext(F.E_),v=s.getPrefixCls,k=s.direction,N=s.timeline,D=o.prefixCls,A=o.children,x=o.items,U=o.className,G=o.style,J=pn()(o,se),nn=v("timeline",D),rn=ge(nn),en=w()(rn,2),ln=en[0],R=en[1],vn=Qn(x,A);return ln((0,an.jsx)(re,j()(j()({},J),{},{className:c()(N==null?void 0:N.className,U),style:j()(j()({},N==null?void 0:N.style),G),prefixCls:nn,direction:k,items:vn,hashId:R})))};bn.Item=M;var d=bn,$=d}}]);
