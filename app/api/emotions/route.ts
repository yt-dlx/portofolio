import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";

import ls_cry from "@/app/api/db/emotions/cry.json";
import ls_hug from "@/app/api/db/emotions/hug.json";
import ls_pat from "@/app/api/db/emotions/pat.json";
import ls_sad from "@/app/api/db/emotions/sad.json";
import ls_yes from "@/app/api/db/emotions/yes.json";
import ls_kiss from "@/app/api/db/emotions/kiss.json";
import ls_bite from "@/app/api/db/emotions/bite.json";
import ls_kick from "@/app/api/db/emotions/kick.json";
import ls_bonk from "@/app/api/db/emotions/bonk.json";
import ls_kill from "@/app/api/db/emotions/kill.json";
import ls_slap from "@/app/api/db/emotions/slap.json";
import ls_wave from "@/app/api/db/emotions/wave.json";
import ls_wink from "@/app/api/db/emotions/wink.json";
import ls_yeet from "@/app/api/db/emotions/yeet.json";
import ls_dance from "@/app/api/db/emotions/dance.json";
import ls_happy from "@/app/api/db/emotions/happy.json";
import ls_bored from "@/app/api/db/emotions/bored.json";
import ls_smile from "@/app/api/db/emotions/smile.json";
import ls_stare from "@/app/api/db/emotions/stare.json";
import ls_punch from "@/app/api/db/emotions/punch.json";
import ls_scream from "@/app/api/db/emotions/scream.json";
import ls_cuddle from "@/app/api/db/emotions/cuddle.json";
import ls_nervous from "@/app/api/db/emotions/nervous.json";
import ls_highfive from "@/app/api/db/emotions/highfive.json";
import ls_confused from "@/app/api/db/emotions/confused.json";
import ls_thinking from "@/app/api/db/emotions/thinking.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    switch (body.argument) {
      case "dance":
        var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __dance,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "cuddle":
        var __cuddle = ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __cuddle,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "bite":
        var __bite = ls_bite[Math.floor(Math.random() * ls_bite.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __bite,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "slap":
        var __slap = ls_slap[Math.floor(Math.random() * ls_slap.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __slap,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "wink":
        var __wink = ls_wink[Math.floor(Math.random() * ls_wink.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __wink,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "bonk":
        var __bonk = ls_bonk[Math.floor(Math.random() * ls_bonk.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __bonk,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "hug":
        var __hug = ls_hug[Math.floor(Math.random() * ls_hug.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __hug,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "kiss":
        var __kiss = ls_kiss[Math.floor(Math.random() * ls_kiss.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __kiss,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "pat":
        var __pat = ls_pat[Math.floor(Math.random() * ls_pat.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __pat,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "happy":
        var __happy = ls_happy[Math.floor(Math.random() * ls_happy.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __happy,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "kill":
        var __kill = ls_kill[Math.floor(Math.random() * ls_kill.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __kill,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "highfive":
        var __highfive =
          ls_highfive[Math.floor(Math.random() * ls_highfive.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __highfive,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "wave":
        var __wave = ls_wave[Math.floor(Math.random() * ls_wave.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __wave,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "cry":
        var __cry = ls_cry[Math.floor(Math.random() * ls_cry.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __cry,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "smile":
        var __smile = ls_smile[Math.floor(Math.random() * ls_smile.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __smile,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "punch":
        var __punch = ls_punch[Math.floor(Math.random() * ls_punch.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __punch,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "kick":
        var __kick = ls_kick[Math.floor(Math.random() * ls_kick.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __kick,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "confused":
        var __confused =
          ls_confused[Math.floor(Math.random() * ls_confused.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __confused,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "sad":
        var __sad = ls_sad[Math.floor(Math.random() * ls_sad.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __sad,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "thinking":
        var __thinking =
          ls_thinking[Math.floor(Math.random() * ls_thinking.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __thinking,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "yeet":
        var __yeet = ls_yeet[Math.floor(Math.random() * ls_yeet.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __yeet,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "stare":
        var __stare = ls_stare[Math.floor(Math.random() * ls_stare.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __stare,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "bored":
        var __bored = ls_bored[Math.floor(Math.random() * ls_bored.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __bored,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "scream":
        var __scream = ls_scream[Math.floor(Math.random() * ls_scream.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __scream,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "nervous":
        var __nervous =
          ls_nervous[Math.floor(Math.random() * ls_nervous.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __nervous,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        break;
      case "yes":
        var __yes = ls_yes[Math.floor(Math.random() * ls_yes.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "EMOTIONS: gif",
              query: body.argument,
              url: __yes,
            },
          }),
          {
            status: 200,
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
              endpoint: "/api/emotions?q=",
              example: "/api/emotions?q=bite",
              querry: [
                "bite",
                "bonk",
                "bored",
                "confused",
                "cry",
                "cuddle",
                "dance",
                "happy",
                "highfive",
                "hug",
                "kick",
                "kill",
                "kiss",
                "nervous",
                "pat",
                "punch",
                "sad",
                "scream",
                "slap",
                "smile",
                "stare",
                "wave",
                "wink",
                "yeet",
                "yes",
                "thinking",
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
