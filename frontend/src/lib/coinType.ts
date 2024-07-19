import { normalizeStructTag } from "@mysten/sui.js/utils";

export const SUI_COINTYPE = "0x2::sui::SUI";
const USDC_COINTYPE =
  "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const USDT_COINTYPE =
  "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN";
const ETH_COINTYPE =
  "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN";
const SOL_COINTYPE =
  "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN";
const SUILEND_POINTS_COINTYPE =
  "0x34fe4f3c9e450fed4d0a3c587ed842eec5313c30c3cc3c0841247c49425e246b::suilend_point::SUILEND_POINT";

export const NORMALIZED_SUI_COINTYPE = normalizeStructTag(SUI_COINTYPE);
export const NORMALIZED_USDC_COINTYPE = normalizeStructTag(USDC_COINTYPE);
export const NORMALIZED_USDT_COINTYPE = normalizeStructTag(USDT_COINTYPE);
export const NORMALIZED_ETH_COINTYPE = normalizeStructTag(ETH_COINTYPE);
export const NORMALIZED_SOL_COINTYPE = normalizeStructTag(SOL_COINTYPE);
export const NORMALIZED_SUILEND_POINTS_COINTYPE = normalizeStructTag(
  SUILEND_POINTS_COINTYPE,
);

// 128x128
export const COINTYPE_LOGO_MAP = {
  [NORMALIZED_SUI_COINTYPE]:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA81BMVEUAAABNov9No/9Qn/9Oov9Qp/9Qo/9Mo/9Nov9Nov9No/9Qn/9Qr/9Oo/9Nov9No/9NpP9Mof9Mo/9Oov9Nov9Oof9Pov9NpP9Mof9Oof9Mo/9Oof9Oo/9Qn/9Oov9Qpf9Nov9Nof9Mo/9Oof9OpP9Oof9Oo/9Nof9Lov9Nn/9Kpf9Nov/////p8/+m0P96uf9YqP/0+f+83P9jrv+x1v9krv/T5/9krf/H4v+Qxf/d7v/T6P9vs//S6P/d7f+byv+by/+m0f+Pxf+93P+Fv//e7f9Yp/9vtP/I4v9jrf/p9P+92/+Ev//e7v+x1//I4f9us//BUENrAAAAK3RSTlMA378g3yBAQO9gUBAQz3Cvj5CQ76/vn5+AkM+AfzCPMJ+gf6BfX2+wcGAwTtvCtgAABXJJREFUeF69mud24zgMhSHJkeUep5ZJpm8FqeaW3qds3/d/mp3jWYaaaCQCNK3vX3SOhBvwgmAxWBF0h5t7vufhEu/IH20Ow1fQCEFn8yjC7xL5m90NWCf9cNNDA0f7IayJcC9CEtF+F5xzchwhA2/f7ViEPrLxQ8fh+Xgd9+Gbl7Dh40qMVvNC/xhX5rgP1oQeOsCzdWP/JTpi0270PXSGZ+GEHyJ0SDQEJi/RMcc894/QOaM+Y/iPUNOwEbT9mlfAj89XwI3vXgE3fvMK+h6ulSNTLYxwzYyglrfIwX1j+BEb4H2NASNk8lHKFJlE1UbkG/BUiCvk4vWdNaA78YU7VzYIkcu9WHKGXEI3M8BvmViSLZwMwlt2fCn+h2/EF1Biw8aACr4Ry5WwY2FAzRSZ+PCMDjK5Fd9wtqoPPSsDarLL1VLQsTagtRHDlRJwocLOJlIb0T4FbUsDZjPESaaNaJ0C39KAf+IXEvXXrXUKNpgGUBFjXBJbGvEVKPbtDHiqnuTKEQvedGhpwesnA6onqZ0RIxW/a2VA3QStjRiqEbAy4BwV1kbcg6/sIp3Lisk3Vo85Roz6ehLgt2DUWBsxZI/AdWX/S8/FV86RztZSwADJ/C2eSFBjbURPz0LsFoyKlYwYsIrwUmjmFfqYRuwAwKFVCz7FMjhlG3GL04ikcQ2mjZgijYGaBRgG1H2ozEQyjRgBvOLMwJoHVKxmxADa1BZMEcA3YheGPANMpZoIK5jy1ohDOGQNgHzajqjvVxoxJpbBiDMAcoY3pu9PJGfHuEerwlzPv0mhGdUbMactDAe0BOhPZtrnBhssSN3AoyVAr8FiYUpxmtFd4AGjBGL1eUPfVRozSiEA/SAkmz1b/OSmFCSOBOQqnvq8SYFywYMjAer/KS8Lzhe1hZC5EXBZqrtcKGRSq/lfJwJuSiuAVBb68qJm1G7QCKEMp+WPTQoK5Fm16KmTeeBCWaBCgbguJ+FRZc3EgDAVf1DzWqWC8mHpRPnGhA/vqEXwvNZzUeD0WRJSahn8RGjHVevwWBSQC9pL5XY85AmoNEJ2aSVgCF2+AM19UcKZjYAQArMHaprrpOiEpPCc6oETwrJc1s5qiRSi3KATYhVElL3pRf2sNjktH1aqiWhOOSk7JDbDh7r2X3FsNaVszTrEXiCRoOBRDRuxF3QBIKBuihOCgiylvKIJSId0eolnVhAXRyAj7E0pJjglLPGuvkmBJPai17RDqnvzXkcf0NwUXjijHVL1TDNBmhFSEBcOS6XKBvGo9B1xSSJigkqR4h11a/SaelvwSe+5zSqTp538zFyE1KPSK8KeO1FpktQEtEBxgAYmhAvCVDxjZh4BxQlSXSByQ9PiXCUGjCubVJoVXDBv0XzWpVVS2A2RBHzi3dv5aCIubAQIAmIkWJCVAszFE/nCJGBKOqXlpQDPhSZPSmP0WWiukZIAbgrSogIhp1rDx+Tud1GMnzISoFNAHQXNXxcPX/isgivy1Ob3TAESiAWBGAkEUOIACTxKYUAmvDtLTa+FBCa5qGWaIoFWDxT8K/TJXFQyT5BEG77LGGkkuX14fVlmMQiayf28FP02RSItqCLYRTJpEv8zX1pSfvjjNkmRzHYAlXSwAX6GGsa4dl5ALTu4Znagnt4A10qrBwaC1lrjBwA8Bc3H1wqaj68VNBG/eQWDAMj01lCNOz3gcICO2QImw110yPYvwCZoNWK/RhrDVg/saDtJQqsN1vQcePGgB6sQrFiQfgCr0mmtEF5lv2EJOrwr2r7j8HyCN6w0bB/8Cs7pvtkmRt9rw5povxmgAW/c7sE6CbpjvyIT24NxJ4BGOGkPxzv+wMMlnufvjYddu9j/Aau3eUSTv4v1AAAAAElFTkSuQmCC",
  [NORMALIZED_USDC_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_USDT_COINTYPE]:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUAAAAAk5MAlJQAlJQAkpIAk5MAkpIAl5cAj48AlZUAj48Ak5MAk5MAk5MAk5MAlZUAkpIAk5MAlJQAkpIAk5MAlZUAk5MAk5MAn58AlJQAj48AlJQAlJQAk5MAlZUAkpIAkpIAk5M/E+zUAAAAIXRSTlMAQL/f34BgIBBgIO+gv88wcFCf76+ff5AQjzBwz2+vsI+0DawvAAADPklEQVR4Xu2YybbbIAyGBZihxnOc2OkdWr3/S7ZXmzYnCVPgsvG38crn/w5RJGF4zsHBwcHBwcGlwWz0CqLpMSsXiOSCmWEQhcbc9BDFgNmZIAKF+bEGgtECC3CFYBYsAov8AarV4S6QqFaHv7EU1sS0gGp1KLAgY3APrlaHGsuikoYgT2Jw1GFcCxDgILadSE8PLi6A2t2Dywv0bufyAji7W0B5AWGcLaC8AEp3CygvYDU8RBQV8NfhB5YU8K8m2j4XYA+4PcaR3XPFpwjz+hr246URKh3nVULAX4daFBXw1+GCJQX8dcjw2wWE+/3yAijT17CT4J/n2yPcPjkXyXWoMRBx3hTTBp5h2Dxt/IRhrFHnJ87TaCCMdt54TB1+oA8+aYjEzF2DHoawFnDaRkhD+RSmkBbAW0hnsv6r2hhaKYSelVzWobF3faAZ+vU6zeN+O6T8I+Et8C61s2kZbEAfsP11/lcyK7r45RfQFMAuvY1qRGKZdxLo0AUHAOYV2C9NUidcmFdg83+R1PvFJrdiMboFGirwtkEHo3hpFkwugdNPAK+BVs0LAtw4BBrKJ4PBIQCtfKhg+y+WZf16PJbkDKDznD8BZnD/C+buhLFwSa92rny/AQkQbOLhEu+bMkBA588nTBfwZc2waePv6OD0ft7UzdQU/ny3qlX3g25kSkl5/gv/y9dzk5Oax/tNYV99+X4DXDSkogQ+ZDDwCIlPWGdIQF8sOvKjDNCuaoQIdnYdEB354Qa3U47t4EPP09Kggw4Il4FbY71Kxdh4q6KpMJe1seihAyey9L2gAw+yrIAEL6qkgIQAVDkBCUHMtpCAhEBGW0CA8sMNcguQcQRtk1uA8tMN/AJ588kgp8CJAcQbZBOg9TfFIJMA5acZ5BFoWkjEDBkEKD+DQaoA5adj1lCBEvnu67Vk/2NL5ZNBOkMLryNfyDeQA1k3P92go/x6Bh1kRCblVzWQkBlVM59QNfOJ2VbMJ0Ybnl/V4A2KQStK9vUz/7pe0YDW34oGtH5WNKD8mgZNC9+CGarmk0HFfMKsNfOJrmY+0XnW3/LIu/WzngHlVzSg9bemQQfVUBxRvDb+Dw4ODg4ODv4AQvglylgHCQQAAAAASUVORK5CYII=",
  [NORMALIZED_ETH_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_SOL_COINTYPE]:
    "data:image/png;base64,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",
  [NORMALIZED_SUILEND_POINTS_COINTYPE]:
    "data:image/png;base64,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",
};

export const COINTYPE_SYMBOL_MAP: Record<string, string> = {
  [NORMALIZED_ETH_COINTYPE]: "ETH",
  [NORMALIZED_SOL_COINTYPE]: "SOL",
  [NORMALIZED_SUILEND_POINTS_COINTYPE]: "Suilend Points",
};

export const COINTYPE_COLOR_MAP = {
  [NORMALIZED_SUI_COINTYPE]: "#4DA2FF",
  [NORMALIZED_USDC_COINTYPE]: "#2775CA",
  [NORMALIZED_USDT_COINTYPE]: "#009393",
  [NORMALIZED_ETH_COINTYPE]: "#8C8C8C",
  [NORMALIZED_SOL_COINTYPE]: "#6674D8",
};

export const extractSymbolFromCoinType = (coinType: string) =>
  coinType.split("::").at(-1);

export const isSui = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_SUI_COINTYPE;
export const isUsdc = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_USDC_COINTYPE;
export const isUsdt = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_USDT_COINTYPE;
export const isEth = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_ETH_COINTYPE;
export const isSol = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_SOL_COINTYPE;
export const isSuilendPoints = (coinType: string) =>
  normalizeStructTag(coinType) === NORMALIZED_SUILEND_POINTS_COINTYPE;
