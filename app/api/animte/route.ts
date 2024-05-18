import moment from "moment";
import malScrapper from "mal-scraper";
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
            endpoint: "/api/anime?q=",
            example: ["/api/anime?q=death note"],
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
    var _resp: any = await malScrapper.getInfoFromName(body.argument);
    if (!_resp) {
      return new Response(
        JSON.stringify({
          status: 404,
          message: "No results found.",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else
      return new Response(
        JSON.stringify({
          resp: {
            id: uuidv4(),
            status: 200,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            id_mal: _resp.id,
            title: _resp.title,
            en_title: _resp.englishTitle,
            jp_title: _resp.japaneseTitle,
            image: _resp.picture,
            premiered: _resp.premiered,
            webpage: _resp.url,
            broadcast: _resp.broadcast,
            genres: _resp.genres,
            type: _resp.type,
            episodes: _resp.episodes,
            rating: _resp.rating,
            aired: _resp.aired,
            score: _resp.score,
            favourites: _resp.favorites,
            rank: _resp.ranked,
            duration: _resp.duration,
            studios: _resp.studios,
            producers: _resp.producers,
            popularity: _resp.popularity,
            members: _resp.members,
            scores: _resp.scoreStats,
            source: _resp.source,
            synonyms: _resp.synonyms,
            synopsis: _resp.synopsis,
            characters: _resp.charaters,
            staffs: _resp.staff,
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
