import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";

import ls_ass from "@/app/api/db/hentai/ass.json";
import ls_cum from "@/app/api/db/hentai/cum.json";
import ls_bdsm from "@/app/api/db/hentai/bdsm.json";
import ls_feet from "@/app/api/db/hentai/feet.json";
import ls_maid from "@/app/api/db/hentai/maid.json";
import ls_orgy from "@/app/api/db/hentai/orgy.json";
import ls_yuri from "@/app/api/db/hentai/yuri.json";
import ls_pussy from "@/app/api/db/hentai/pussy.json";
import ls_hentai from "@/app/api/db/hentai/hentai.json";
import ls_doujin from "@/app/api/db/hentai/doujin.json";
import ls_femdom from "@/app/api/db/hentai/femdom.json";
import ls_thighs from "@/app/api/db/hentai/thighs.json";
import ls_school from "@/app/api/db/hentai/school.json";
import ls_blowjob from "@/app/api/db/hentai/blowjob.json";
import ls_foxgirl from "@/app/api/db/hentai/foxgirl.json";
import ls_panties from "@/app/api/db/hentai/panties.json";
import ls_uniform from "@/app/api/db/hentai/uniform.json";
import ls_succubus from "@/app/api/db/hentai/succubus.json";
import ls_netorare from "@/app/api/db/hentai/netorare.json";
import ls_tentacles from "@/app/api/db/hentai/tentacles.json";
import ls_uglyBastard from "@/app/api/db/hentai/uglyBastard.json";
import ls_masturbation from "@/app/api/db/hentai/masturbation.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    switch (body.argument) {
      case "ass":
        var __ass = ls_ass[Math.floor(Math.random() * ls_ass.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "I know you like anime ass~ uwu",
              query: body.argument,
              url: __ass,
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
      case "bdsm":
        var __bdsm = ls_bdsm[Math.floor(Math.random() * ls_bdsm.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "If you don't know what it is, search it up",
              query: body.argument,
              url: __bdsm,
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
      case "blowjob":
        var __blowjob =
          ls_blowjob[Math.floor(Math.random() * ls_blowjob.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description:
                "Basically an image of a girl sucking on a sharp blade!",
              query: body.argument,
              url: __blowjob,
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
      case "cum":
        var __cum = ls_cum[Math.floor(Math.random() * ls_cum.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description:
                "Basically sticky white stuff that is usually milked from sharpies.",
              query: body.argument,
              url: __cum,
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
      case "doujin":
        var __doujin = ls_doujin[Math.floor(Math.random() * ls_doujin.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Sends a random doujin page imageURL!",
              query: body.argument,
              url: __doujin,
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
      case "feet":
        var __feet = ls_feet[Math.floor(Math.random() * ls_feet.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "So you like smelly feet huh?",
              query: body.argument,
              url: __feet,
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
      case "femdom":
        var __femdom = ls_femdom[Math.floor(Math.random() * ls_femdom.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Female Domination over you",
              query: body.argument,
              url: __femdom,
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
      case "foxgirl":
        var __foxgirl =
          ls_foxgirl[Math.floor(Math.random() * ls_foxgirl.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Girl's that are wannabe foxes, yes",
              query: body.argument,
              url: __foxgirl,
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
      case "netorare":
        var __netorare =
          ls_netorare[Math.floor(Math.random() * ls_netorare.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Wow, I won't even question your fetishes.",
              query: body.argument,
              url: __netorare,
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
      case "maid":
        var __maid = ls_maid[Math.floor(Math.random() * ls_maid.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description:
                "Maids, Maid Uniforms, etc, you know what maids are :3",
              query: body.argument,
              url: __maid,
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
      case "masturbation":
        var __masturbation =
          ls_masturbation[Math.floor(Math.random() * ls_masturbation.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "The power of solo queue",
              query: body.argument,
              url: __masturbation,
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
      case "orgy":
        var __orgy = ls_orgy[Math.floor(Math.random() * ls_orgy.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Group Lewd Acts",
              query: body.argument,
              url: __orgy,
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
      case "panties":
        var __panties =
          ls_panties[Math.floor(Math.random() * ls_panties.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "I mean... just why? You like underwear?",
              query: body.argument,
              url: __panties,
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
      case "pussy":
        var __pussy = ls_pussy[Math.floor(Math.random() * ls_pussy.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "School Uniforms!~ Yatta~!",
              query: body.argument,
              url: __pussy,
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
      case "school":
        var __school = ls_school[Math.floor(Math.random() * ls_school.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "School Uniforms!~ Yatta~!",
              query: body.argument,
              url: __school,
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
      case "succubus":
        var __succubus =
          ls_succubus[Math.floor(Math.random() * ls_succubus.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description:
                "Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
              query: body.argument,
              url: __succubus,
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
      case "tentacles":
        var __tentacles =
          ls_tentacles[Math.floor(Math.random() * ls_tentacles.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "I'm sorry but, why do they look like intestines?",
              query: body.argument,
              url: __tentacles,
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
      case "thighs":
        var __thighs = ls_thighs[Math.floor(Math.random() * ls_thighs.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "The top part of your legs, very hot, isn't it?",
              query: body.argument,
              url: __thighs,
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
      case "uglyBastard":
        var __uglyBastard =
          ls_uglyBastard[Math.floor(Math.random() * ls_uglyBastard.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "The one thing most of us can all agree to hate :)",
              query: body.argument,
              url: __uglyBastard,
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
      case "uniform":
        var __uniform =
          ls_uniform[Math.floor(Math.random() * ls_uniform.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description:
                "Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~",
              query: body.argument,
              url: __uniform,
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
      case "yuri":
        var __yuri = ls_yuri[Math.floor(Math.random() * ls_yuri.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Girls on Girls, and Girl's only!<3",
              query: body.argument,
              url: __yuri,
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
      case "hentai":
        var __hentai = ls_hentai[Math.floor(Math.random() * ls_hentai.length)];
        new Response(
          JSON.stringify({
            resp: {
              id: uuidv4(),
              status: 200,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "HENTAI: .png, .jpg",
              description: "Random hentai...",
              query: body.argument,
              url: __hentai,
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
              endpoint: "/api/hentai?q=",
              example: "/api/hentai?q=ass",
              querry: [
                "ass",
                "bdsm",
                "blowjob",
                "cum",
                "doujin",
                "feet",
                "femdom",
                "foxgirl",
                "hentai",
                "netorare",
                "maid",
                "masturbation",
                "orgy",
                "panties",
                "pussy",
                "school",
                "succubus",
                "tentacles",
                "thighs",
                "uglyBastard",
                "uniform",
                "yuri",
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
