import https from "https";
import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";

function shorten(url: any) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export async function POST(request: Request) {
  let response, data, FFLink;
  try {
    const body = await request.json();
    switch (body.argument) {
      case "nsfw":
        response = await fetch("https://www.reddit.com/r/nsfw/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "nsfw2":
        response = await fetch("https://www.reddit.com/r/nsfw2/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "bonermaterial":
        response = await fetch(
          "https://www.reddit.com/r/bonermaterial/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "nsfw411":
        response = await fetch("https://www.reddit.com/r/nsfw411/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "iwanttofuckher":
        response = await fetch(
          "https://www.reddit.com/r/iWantToFuckHer/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "exxxtras":
        response = await fetch("https://www.reddit.com/r/exxxtras/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "distension":
        response = await fetch(
          "https://www.reddit.com/r/distension/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "bimbofetish":
        response = await fetch(
          "https://www.reddit.com/r/bimbofetish/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "christiangirls":
        response = await fetch(
          "https://www.reddit.com/r/christiangirls/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "dirtygaming":
        response = await fetch(
          "https://www.reddit.com/r/dirtygaming/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "sexybutnotporn":
        response = await fetch(
          "https://www.reddit.com/r/sexybutnotporn/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "femalepov":
        response = await fetch(
          "https://www.reddit.com/r/femalepov/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "omgbeckylookathiscock":
        response = await fetch(
          "https://www.reddit.com/r/omgbeckylookathiscock/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "sexygirls":
        response = await fetch(
          "https://www.reddit.com/r/sexygirls/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "breedingmaterial":
        response = await fetch(
          "https://www.reddit.com/r/breedingmaterial/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "toocuteforporn":
        response = await fetch(
          "https://www.reddit.com/r/toocuteforporn/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "justhotwomen":
        response = await fetch(
          "https://www.reddit.com/r/justhotwomen/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "stripgirls":
        response = await fetch(
          "https://www.reddit.com/r/stripgirls/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "hotstuffnsfw":
        response = await fetch(
          "https://www.reddit.com/r/hotstuffnsfw/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "uncommonposes":
        response = await fetch(
          "https://www.reddit.com/r/uncommonposes/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "gifsofremoval":
        response = await fetch(
          "https://www.reddit.com/r/gifsofremoval/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "nostalgiafapping":
        response = await fetch(
          "https://www.reddit.com/r/nostalgiafapping/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "truefmk":
        response = await fetch("https://www.reddit.com/r/truefmk/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "nudes":
        response = await fetch("https://www.reddit.com//r/nudes/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "4k":
      case "realgirls":
        response = await fetch(
          "https://www.reddit.com/r/RealGirls/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "blowjobs":
        response = await fetch("https://www.reddit.com/r/Blowjobs/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "milf":
        response = await fetch("https://www.reddit.com/r/milf/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "milk":
      case "milking":
      case "lactating":
        response = await fetch(
          "https://www.reddit.com/r/lactating/random.json"
        );
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "pussy":
        response = await fetch("https://www.reddit.com/r/pussy/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      case "cum":
      case "slut":
      case "cumslut":
        response = await fetch("https://www.reddit.com/r/cumsluts/random.json");
        data = await response.json();
        FFLink = data[0].data.children[0].data.url;
        if (FFLink) {
          return new Response(
            JSON.stringify({
              resp: {
                id: uuidv4(),
                status: 200,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: body.argument,
                url: shorten(FFLink),
                domain: data[0].data.children[0].data.domain,
                sub_reddit_id: data[0].data.children[0].data.subreddit_id,
                title: data[0].data.children[0].data.title,
                author: data[0].data.children[0].data.author,
                thumbnail: data[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  data[0].data.children[0].data.permalink,
              },
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else
          new Response(
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
        break;
      default:
        new Response(
          JSON.stringify({
            status: 500,
            message: "Arguments not satisfied.",
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            usage: {
              endpoint: "/api/nsfw?q=",
              example: "/api/nsfw?q=ass",
              querry: [
                "nsfw",
                "nsfw2",
                "bonermaterial",
                "nsfw411",
                "iwanttofuckher",
                "exxxtras",
                "distension",
                "bimbofetish",
                "christiangirls",
                "dirtygaming",
                "sexybutnotporn",
                "femalepov",
                "omgbeckylookathiscock",
                "sexygirls",
                "breedingmaterial",
                "canthold",
                "toocuteforporn",
                "justhotwomen",
                "stripgirls",
                "hotstuffnsfw",
                "uncommonposes",
                "gifsofremoval",
                "nostalgiafapping",
                "truefmk",
                "nudes",
                "4k",
                "realgirls",
                "blowjobs",
                "milf",
                "milk",
                "milking",
                "lactating",
                "pussy",
                "cum",
                "slut",
                "cumslut",
                "cringe",
              ],
            },
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
    }
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
