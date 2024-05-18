import moment from "moment";
import { load } from "cheerio";
import { uuid as uuidv4 } from "uuidv4";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.argument) {
      return new Response(
        JSON.stringify({
          id: uuidv4(),
          status: 500,
          message: "Arguments not satisfied.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/google?q=",
            example: "/api/google?q=github",
          },
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const url = new URL("https://www.google.com/search");
    url.searchParams.append("q", body.argument);
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        origin: "https://www.google.com",
        referer: "https://www.google.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      },
    });
    const searchParams = await response.text();
    const $ = load(searchParams);
    const data_: any = [];
    $("div.tF2Cxc").each(function (d: any) {
      const el = $(d);
      const header = el.find("cite.iUh30").text();
      const title = el.find("div.yuRUbf > a > h3").text();
      const url = el.find("div.yuRUbf > a[href]").attr("href");
      if (el.length && url) {
        data_.push({
          header: header,
          title: title,
          url,
        });
      }
    });
    return new Response(
      JSON.stringify({
        uuid: uuidv4(),
        date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        topic: "GOOGLE: search",
        title: $("div.I6TXqe > div.osrp-blk")
          .find("h2.qrShPb > span")
          .text()
          .trim(),
        data: data_,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Internal server error.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      status: 500,
      message: "Method Not Allowed.",
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function PUT(request: Request) {
  return new Response(
    JSON.stringify({
      status: 500,
      message: "Method Not Allowed.",
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export async function DELETE(request: Request) {
  return new Response(
    JSON.stringify({
      status: 500,
      message: "Method Not Allowed.",
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
