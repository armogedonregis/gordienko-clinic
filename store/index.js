import { createStore } from 'vuex'
import face1 from '/static/assets/images/faces/face1-1.png'
import face2 from '/static/assets/images/faces/face1-2.png'
import face3 from '/static/assets/images/faces/face1-3.png'
import face4 from '/static/assets/images/faces/face1-4.png'
import face5 from '/static/assets/images/faces/face1-5.png'
import face6 from '/static/assets/images/faces/face1-6.png'
import face7 from '/static/assets/images/faces/face1-7.png'
import face8 from '/static/assets/images/faces/face1-8.png'
import face9 from '/static/assets/images/faces/face1-9.png'
import face10 from '/static/assets/images/faces/face1-10.png'
import face11 from '/static/assets/images/faces/face1-11.png'
import face12 from '/static/assets/images/faces/face1-12.png'
import face13 from '/static/assets/images/faces/face1-13.png'
import face14 from '/static/assets/images/faces/face1-14.png'
import face15 from '/static/assets/images/faces/face1-15.png'
import face16 from '/static/assets/images/faces/face1-16.png'
import face17 from '/static/assets/images/faces/face1-17.png'
import face18 from '/static/assets/images/faces/face1-18.png'
import face19 from '/static/assets/images/faces/face1-19.png'
import face20 from '/static/assets/images/faces/face1-20.png'
import face21 from '/static/assets/images/faces/face1-21.png'
import face22 from '/static/assets/images/faces/face1-22.png'
import face23 from '/static/assets/images/faces/face1-23.png'
import face24 from '/static/assets/images/faces/face1-24.png'
import face25 from '/static/assets/images/faces/face1-25.png'
import face26 from '/static/assets/images/faces/face1-26.png'
import face27 from '/static/assets/images/faces/face1-27.png'
import face28 from '/static/assets/images/faces/face1-28.png'
import face29 from '/static/assets/images/faces/face1-29.png'
import face30 from '/static/assets/images/faces/face1-30.png'
import face31 from '/static/assets/images/faces/face1-31.png'
import face32 from '/static/assets/images/faces/face1-32.png'
import face33 from '/static/assets/images/faces/face1-33.png'
import face34 from '/static/assets/images/faces/face1-34.png'
import face35 from '/static/assets/images/faces/face1-35.png'
import face36 from '/static/assets/images/faces/face1-36.png'
import face37 from '/static/assets/images/faces/face1-37.png'
import face38 from '/static/assets/images/faces/face1-38.png'
import face39 from '/static/assets/images/faces/face1-39.png'
import face40 from '/static/assets/images/faces/face1-40.png'
import face41 from '/static/assets/images/faces/face1-41.png'
import face42 from '/static/assets/images/faces/face1-42.png'
import face43 from '/static/assets/images/faces/face1-43.png'
import face44 from '/static/assets/images/faces/face1-44.png'
import face45 from '/static/assets/images/faces/face1-45.png'
import face46 from '/static/assets/images/faces/face1-46.png'
import face47 from '/static/assets/images/faces/face1-47.png'
import face48 from '/static/assets/images/faces/face1-48.png'
import face49 from '/static/assets/images/faces/face1-49.png'
import face50 from '/static/assets/images/faces/face1-50.png'
import face51 from '/static/assets/images/faces/face1-51.png'
import face52 from '/static/assets/images/faces/face1-52.png'
import face53 from '/static/assets/images/faces/face1-53.png'
import face54 from '/static/assets/images/faces/face1-54.png'
import face55 from '/static/assets/images/faces/face1-55.png'
import face56 from '/static/assets/images/faces/face1-56.png'
import face57 from '/static/assets/images/faces/face1-57.png'
import face58 from '/static/assets/images/faces/face1-58.png'
import face59 from '/static/assets/images/faces/face1-59.png'
import face60 from '/static/assets/images/faces/face1-60.png'
import face61 from '/static/assets/images/faces/face1-61.png'
import face62 from '/static/assets/images/faces/face1-62.png'
import face63 from '/static/assets/images/faces/face1-63.png'
import face64 from '/static/assets/images/faces/face1-64.png'
import face65 from '/static/assets/images/faces/face1-65.png'
import face66 from '/static/assets/images/faces/face1-66.png'
import face67 from '/static/assets/images/faces/face1-67.png'
import face68 from '/static/assets/images/faces/face1-68.png'
import face69 from '/static/assets/images/faces/face1-69.png'
import face70 from '/static/assets/images/faces/face1-70.png'
import face71 from '/static/assets/images/faces/face1-71.png'
import face72 from '/static/assets/images/faces/face1-72.png'
import face73 from '/static/assets/images/faces/face1-73.png'
import face74 from '/static/assets/images/faces/face1-74.png'
import face75 from '/static/assets/images/faces/face1-75.png'
import face76 from '/static/assets/images/faces/face1-76.png'
import face77 from '/static/assets/images/faces/face1-77.png'
import face78 from '/static/assets/images/faces/face1-78.png'
import face79 from '/static/assets/images/faces/face1-79.png'
import face80 from '/static/assets/images/faces/face1-80.png'
import face81 from '/static/assets/images/faces/face1-81.png'
import face82 from '/static/assets/images/faces/face1-82.png'
import face83 from '/static/assets/images/faces/face1-83.png'
import face84 from '/static/assets/images/faces/face1-84.png'

export default createStore({
	state() {
		return {
			facePhotos: [
				face1,
				face2,
				face3,
				face4,
				face5,
				face6,
				face7,
				face8,
				face9,
				face10,
				face11,
				face12,
				face13,
				face14,
				face15,
				face16,
				face17,
				face18,
				face19,
				face20,
				face21,
				face22,
				face23,
				face24,
				face25,
				face26,
				face27,
				face28,
				face29,
				face30,
				face31,
				face32,
				face33,
				face34,
				face35,
				face36,
				face37,
				face38,
				face39,
				face40,
				face41,
				face42,
				face43,
				face44,
				face45,
				face46,
				face47,
				face48,
				face49,
				face50,
				face51,
				face52,
				face53,
				face54,
				face55,
				face56,
				face57,
				face58,
				face59,
				face60,
				face61,
				face62,
				face63,
				face64,
				face65,
				face66,
				face67,
				face68,
				face69,
				face70,
				face71,
				face72,
				face73,
				face74,
				face75,
				face76,
				face77,
				face78,
				face79,
				face80,
				face81,
				face82,
				face83,
				face84,
			],
		}
	},
	mutations: {},
})
