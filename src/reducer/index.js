import { SELECT_CHAT, GET_ROOM, ADD_MESSAGE } from "../constants/actionType";

const INITIAL_STATE = {
  selected: {},
  chats: [
    {
      id: "1",
      avatar: require("../images/avatar/avatar-1.JPG"),
      updatedAt: "09:32",
      target: "장만월 사장님",
      messages: [
        {
          name: "장만월 사장님",
          content: "출근했니?",
          time: 1,
          read: true,
          type: "text"
        },
        {
          name: "장만월 사장님",

          content: "출근 했냐구?",
          time: 2,
          read: false,
          type: "text"
        },
        {
          name: "장만월 사장님",
          content: "어딘데 출근 안하니",
          time: 3,
          read: false,
          type: "text"
        },
        {
          name: "구찬성",
          content: "해외 출장중입니다",
          time: 4,
          read: false,
          type: "text"
        }
      ]
    },
    {
      id: "2",
      avatar: require("../images/avatar/avatar-3.JPG"),
      updatedAt: "02:34",
      target: "신정근 바텐더",
      messages: [
        {
          name: "신정근 바텐더",
          content: "오시는 길에 와인 몇병만 사다주세요.",
          time: 1,
          read: true,
          type: "text"
        }
      ]
    },
    {
      id: "3",
      avatar: require("../images/avatar/avatar-4.JPG"),
      updatedAt: "금요일",
      target: "유미라 의사",
      messages: [
        {
          name: "유미라 의사",
          content:
            "휴가 잘 보내시고 계신가요? 다름이 아니라 지난 주에 먹자고 했던 삼겹살에 소주 한 잔 하고 싶은데",
          time: 1,
          read: true,
          type: "text"
        }
      ]
    },
    {
      id: "5",
      avatar: require("../images/avatar/avatar-6.JPG"),
      updatedAt: "금요일",
      target: "노준석 총지배인",
      messages: [
        {
          name: "노준석 총지배인",
          content:
            "휴가에서 언제 돌아오시는지요. 돌아오시면 삽결살에 소주 한 잔 하시죠",
          time: 1,
          read: true,
          type: "text"
        }
      ]
    },
    {
      id: "6",
      avatar: require("../images/avatar/avatar-7.JPG"),
      updatedAt: "금요일",
      target: "김유나 인턴",
      messages: [
        {
          name: "김유나 인턴",
          content: "304호 키를 잃어버렸어요 어떻게 해야하죠?",
          time: 1,
          read: true,
          type: "text"
        }
      ]
    },
    {
      id: "7",
      avatar: require("../images/avatar/avatar-2.JPG"),
      updatedAt: "금요일",
      target: "아버지",
      messages: [
        {
          name: "아버지",
          content: "아빠다",
          time: 1,
          read: true,
          type: "text"
        }
      ]
    }
  ]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_CHAT:
      return {
        ...state,
        selected: state.chats[state.chats.findIndex(c => c.id === action.id)]
      };

    case ADD_MESSAGE: {
      const index = state.chats.findIndex(c => c.id === action.chatId);
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, index),
          {
            ...state.chats[index],
            messages: [...state.chats[index].messages, action.message]
          },
          ...state.chats.slice(index + 1, state.chats.length - 1)
        ]
      };
    }

    default:
      return state;
  }
}
