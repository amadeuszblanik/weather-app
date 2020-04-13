//
//  inlineSVG.ts
//  Works with React
//
//  Created by Amadeusz Blanik on 24/05/2019.
//  Copyright © 2019 Amadeusz Blanik. All rights reserved.
//

interface SVGResponse extends Response {
  parsedBody?: string;
}

export class InlineSVG {
  private refNode: HTMLElement;
  private source: string;

  constructor(target: HTMLElement, source: string) {
    this.refNode = target;
    this.source = source;

    if (typeof window !== "object") {
      console.error("Window is not an object. SSR is not supported.");
    } else {
      if ("fetch" in window) {
        this.render();
      } else {
        console.error("Your browser does not supports Fetch API");
      }
    }
  }

  http = async (request: RequestInfo): Promise<any> => {
    return new Promise((resolve, reject) => {
      let response: SVGResponse;

      if (this.refNode.nodeName !== "FIGURE") {
        reject(`refNode is not HTMLFigureElement (${this.refNode.nodeName})`);
      }

      fetch(request)
        .then(res => {
          response = res;
          return res.text();
        })
        .then(body => {
          if (response.ok) {
            const contentType: string | null = response.headers.get("content-type");
            if (contentType && !contentType.startsWith("image/svg+xml")) {
              throw `XSS Preventing:: Received data is not SVG. Content-type is: "${response.headers.get(
                "content-type",
              )}"`;
            } else {
              response.parsedBody = body;
              resolve(response);
            }
          } else {
            reject(response);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  async render() {
    try {
      const svgCode = await this.http(this.source);
      this.refNode.innerHTML = svgCode.parsedBody;
    } catch (err) {
      console.error("Error during fetching svgCode", err);
    }
  }
}
