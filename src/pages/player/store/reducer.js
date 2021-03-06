// import { Map } from 'immutable';
import {
  produce
} from 'immer';

import * as actionTypes from './constants';

const defaultState = {
  playList: [
    {
      "name": "又（翻自 李天佑） ",
      "id": 1429026265,
      "pst": 0,
      "t": 0,
      "ar": [{
        "id": 34512471,
        "name": "温柔的才Music.",
        "tns": [],
        "alias": []
      }],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 9,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 86290402,
        "name": "时间诠释了真爱.",
        "picUrl": "https://p2.music.126.net/F-QNDYYuxRySjREdOfRarw==/109951164900695243.jpg",
        "tns": [],
        "pic_str": "109951164900695243",
        "pic": 109951164900695250
      },
      "dt": 248657,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9948517,
        "vd": 3717
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5969128,
        "vd": 6182
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3979433,
        "vd": 7823
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 2,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [{
        "id": 5771,
        "name": "许嵩",
        "tns": [],
        "alias": []
      }],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 49,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 16953,
        "name": "自定义",
        "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "tns": [],
        "pic_str": "18590542604286213",
        "pic": 18590542604286212
      },
      "dt": 241840,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9675799,
        "vd": -21099
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5805497,
        "vd": -18400
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3870346,
        "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    },
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [{
        "id": 5771,
        "name": "许嵩",
        "tns": [],
        "alias": []
      }],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5302271,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 14026,
      "publishTime": 1461723397683
    }, 
    {
      "name": "嚣张",
      "id": 1382596189,
      "pst": 0,
      "t": 0,
      "ar": [{
        "id": 32220939,
        "name": "en",
        "tns": [],
        "alias": []
      }],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 10,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 80816891,
        "name": "嚣张",
        "picUrl": "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
        "tns": [],
        "pic_str": "109951164271814514",
        "pic": 109951164271814510
      },
      "dt": 253994,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10162605,
        "vd": -55669
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6097581,
        "vd": -53082
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4065069,
        "vd": -51369
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1372818,
      "publishTime": 0
    }
  ],
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: [],
  currentSong: {
    "name": "又（翻自 李天佑） ",
    "id": 1429026265,
    "pst": 0,
    "t": 0,
    "ar": [{
      "id": 34512471,
      "name": "温柔的才Music.",
      "tns": [],
      "alias": []
    }],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 0,
    "v": 9,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 86290402,
      "name": "时间诠释了真爱.",
      "picUrl": "https://p2.music.126.net/F-QNDYYuxRySjREdOfRarw==/109951164900695243.jpg",
      "tns": [],
      "pic_str": "109951164900695243",
      "pic": 109951164900695250
    },
    "dt": 248657,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 9948517,
      "vd": 3717
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 5969128,
      "vd": 6182
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 3979433,
      "vd": 7823
    },
    "a": null,
    "cd": "01",
    "no": 1,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 0,
    "s_id": 0,
    "mark": 0,
    "originCoverType": 2,
    "originSongSimpleData": null,
    "resourceState": true,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 0,
    "publishTime": 0
  },
  currentLyrics: [],
  simiPlaylist: [],
  simiSongs: [],
  currentLyricIndex: -1
};

const reducer = produce((state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      state.currentSong = action.song;
      return state;
      // return state.set("currentSong", action.song);
    case actionTypes.CHANGE_LYRICS:
      state.currentLyrics = action.lyrics;
      return state;
      // return state.set("currentLyrics", action.lyrics);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      state.simiPlaylist = action.simiPlaylist;
      return state;
      // return state.set("simiPlaylist", action.simiPlaylist);
    case actionTypes.CHANGE_SIMI_SONGS:
      state.simiSongs = action.simiSongs;
      return state;
      // return state.set("simiSongs", action.simiSongs);
    case actionTypes.CHANGE_PLAY_LIST:
      state.playList = action.playList;
      return state;
      // return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      state.currentSongIndex = action.index;
      return state;
      // return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      state.currentLyricIndex = action.index;
      return state;
      // return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      state.playSequence = action.sequence;
      return state;
      // return state.set("playSequence", action.sequence);
    default:
      return state;
  }
})

export default reducer;
