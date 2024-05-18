import axios from "axios";
import moment from "moment";
import { load } from "cheerio";
import { uuid as uuidv4 } from "uuidv4";

export async function GET(request: Request) {
  try {
    const _data = await axios.get("https://otakudesu.moe/ongoing-anime/");
    const $ = load(_data.data);
    const result: any = [];
    const thumbnail: any = [];
    const release: any = [];
    const webpage: any = [];
    const episode: any = [];
    const title: any = [];
    $("div.detpost").each(function (a, b) {
      thumbnail.push($(b).find("img").attr("src"));
      title.push($(b).find("h2").text());
      webpage.push($(b).find("a").attr("href"));
    });
    $("div.newnime").each(function (f, g) {
      release.push($(g).text());
    });
    $("div.epz").each(function (m, n) {
      episode.push($(n).text());
    });
    for (let i = 0; i < thumbnail.length; i++) {
      result.push({
        title: title[i],
        thumbnail: thumbnail[i],
        current: episode[i],
        release: release[i],
        webpage: webpage[i],
      });
    }
    return new Response(
      JSON.stringify({
        resp: {
          id: uuidv4(),
          status: true,
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        },
        meta: {
          topic: "ANIME: on going",
          animes: result,
        },
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

export async function POST(request: Request) {
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
