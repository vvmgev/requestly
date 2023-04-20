import React from "react";
import { DesktopNetworkLog } from "./types";
import { ResourceTable } from "@requestly-ui/resource-table";
import { useRegisterLogNetworkRequestEvent } from "./hooks";
import { desktopNetworkTableColumns } from "./colums";

// interface DesktopNetworkTableProps<T> extends ResourceTableProps<DesktopNetworkLog> {
//   harEntrySelector: (log: T) => T;
// }

const log = {
  newLogs: [
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
    {
      id: "6ecb43be-3a92-4ec2-a384-727caac0db2a",
      data: {
        startedDateTime: "2023-04-19T04:14:29.398Z",
        request: {
          bodySize: -1,
          headersSize: -1,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "host",
              value: "www.google.com",
            },
            {
              name: "connection",
              value: "keep-alive",
            },
            {
              name: "sec-ch-ua",
              value: '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            },
            {
              name: "sec-ch-ua-mobile",
              value: "?0",
            },
            {
              name: "user-agent",
              value:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            },
            {
              name: "sec-ch-ua-arch",
              value: '"arm"',
            },
            {
              name: "sec-ch-ua-full-version",
              value: '"112.0.5615.137"',
            },
            {
              name: "sec-ch-ua-platform-version",
              value: '"13.2.1"',
            },
            {
              name: "sec-ch-ua-full-version-list",
              value: '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
            },
            {
              name: "sec-ch-ua-bitness",
              value: '"64"',
            },
            {
              name: "sec-ch-ua-model",
              value: '""',
            },
            {
              name: "sec-ch-ua-wow64",
              value: "?0",
            },
            {
              name: "sec-ch-ua-platform",
              value: '"macOS"',
            },
            {
              name: "accept",
              value: "*/*",
            },
            {
              name: "origin",
              value: "https://www.google.com",
            },
            {
              name: "x-client-data",
              value: "CIbaygE=",
            },
            {
              name: "sec-fetch-site",
              value: "same-origin",
            },
            {
              name: "sec-fetch-mode",
              value: "no-cors",
            },
            {
              name: "sec-fetch-dest",
              value: "empty",
            },
            {
              name: "referer",
              value: "https://www.google.com/",
            },
            {
              name: "accept-encoding",
              value: "gzip",
            },
            {
              name: "accept-language",
              value: "en-GB,en-US;q=0.9,en;q=0.8",
            },
            {
              name: "cookie",
              value:
                "AEC=AUEFqZf4AFqMVK9Rdny78ejk7h8QqnA-uNAHS6GON7klzJTX9tsTftCXSg; OTZ=6992893_34_34__34_; NID=511=hrHu5Fkt1EbMB0cMBLm49cDqDQF7cGqhQOwTKVwCVWAKYlS0VFTBti5yzhvqmVLD_X9L_LfnDwodXAWvQDTW1oTbBsFYKQFIbo9f9J3wzs7pUB5FKXolRhnhHbl6lMVPLIHQJIfyw_ef3aQYeCNrCvGDC7dI8C4TRAfP5bLiNDU; DV=I3V-DxjJKcgiEKMYZTqdNnEKRn97eRj5Nu0W6YpcJAEAAAA; 1P_JAR=2023-04-19-04",
            },
          ],
          method: "POST",
          queryString: [],
          url:
            "https://www.google.com/gen_204?atyp=i&r=1&ei=e2o_ZIq0H_b34-EPwu-ayAs&ct=slh&v=t1&pv=0.7277702872371383&me=131:1681877628994,R,1,CGcQAw,909,344,370,959:0,R,1,CJABEAA,909,344,370,959:0,R,1,CJIBEAA,909,344,370,679:0,R,1,CI8BEAA,909,344,370,679:0,R,1,CI0BEAA,909,344,370,41:0,R,1,CIwBEAA,909,385,370,152:0,R,1,CIwBEAE,924,398,340,133:0,R,1,CHIQAA,909,537,370,29:0,R,1,CIMBEAA,909,566,370,29:0,R,1,CHQQAA,909,595,370,51:0,R,1,CIEBEAA,909,646,370,51:0,R,1,CIcBEAA,909,697,370,29:0,R,1,CHcQAA,909,727,370,51:0,R,1,CHYQAA,909,778,370,29:40170,e,H&zx=1681877669165&opi=89978449",
        },
        response: {
          status: 204,
          httpVersion: "HTTP/1.1",
          cookies: [],
          headers: [
            {
              name: "content-type",
              value: "text/html; charset=UTF-8",
            },
            {
              name: "content-security-policy",
              value:
                "object-src 'none';base-uri 'self';script-src 'nonce-09amDF7hatLwBWEfZr2Gzg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other",
            },
            {
              name: "cross-origin-opener-policy",
              value: 'same-origin-allow-popups; report-to="gws"',
            },
            {
              name: "report-to",
              value:
                '{"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}',
            },
            {
              name: "permissions-policy",
              value: "unload=()",
            },
            {
              name: "origin-trial",
              value:
                "Ap+qNlnLzJDKSmEHjzM5ilaa908GuehlLqGb6ezME5lkhelj20qVzfv06zPmQ3LodoeujZuphAolrnhnPA8w4AIAAABfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJQZXJtaXNzaW9uc1BvbGljeVVubG9hZCIsImV4cGlyeSI6MTY4NTY2Mzk5OX0=, AvudrjMZqL7335p1KLV2lHo1kxdMeIN0dUI15d0CPz9dovVLCcXk8OAqjho1DX4s6NbHbA/AGobuGvcZv0drGgQAAAB9eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJCYWNrRm9yd2FyZENhY2hlTm90UmVzdG9yZWRSZWFzb25zIiwiZXhwaXJ5IjoxNjkxNTM5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
            },
            {
              name: "date",
              value: "Wed, 19 Apr 2023 04:14:29 GMT",
            },
            {
              name: "server",
              value: "gws",
            },
            {
              name: "x-xss-protection",
              value: "0",
            },
            {
              name: "x-frame-options",
              value: "SAMEORIGIN",
            },
            {
              name: "alt-svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              name: "transfer-encoding",
              value: "chunked",
            },
            {
              name: "connection",
              value: "close",
            },
          ],
          content: {
            size: 33,
            compression: 0,
            mimeType: "text/html; charset=UTF-8",
            text: {},
            comment: "",
          },
          headersSize: -1,
          bodySize: -1,
          comment: "",
        },
        cache: {},
        timings: {},
        comment: "",
      },
      actions: [],
    },
  ],
};

// if (searchKeyword) {
//   try {
//     const reg = new RegExp(searchKeyword, "i");
//     return logs.filter((log) => log.url.match(reg));
//   } catch (err) {
//     Logger.log(err);
//   }
// }

// return logs;

const filterLogs = (log: DesktopNetworkLog): boolean => {
  return true;
};

export const DesktopNetworkTable: React.FC<DesktopNetworkLog> = () => {
  const { newLogs } = useRegisterLogNetworkRequestEvent();
  console.log({ newLogs });

  return (
    <div>
      <ResourceTable filter={filterLogs} resources={log.newLogs} columns={desktopNetworkTableColumns} />
    </div>
  );
};
