
import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const MY_ATTEND = 'attend/MY_ATTEND'
const TODAY_ATTEND = 'attend/TODAY_ATTEND'
const ATTEND_ADMIN = 'attend/ATTEND_ADMIN'
const ATTEND_MODIFY_SUCCESS = 'attend/ATTEND_MODIFY_SUCCESS'
const ENTER_SUCCESS = 'attend/ENTER_SUCCESS';
const LEAVE_SUCCESS = 'attend/LEAVE_SUCCESS';
const ATTEND_ADMIN_BY_TYPE = 'attend/ATTEND_ADMIN_BY_TYPE';
/* 액션 함수 */
export const {attend : {myAttend, todayAttend, attendAdmin,attendModifySuccess,enterSuccess,leaveSuccess,attendAdminByType}} = createActions({
    [MY_ATTEND] : result => ({ myAttend : result.data}),
    [TODAY_ATTEND] : result => ({todayAttend : result.data}),
    [ATTEND_ADMIN] : result => ({attendAdmin : result.data}),
    [ATTEND_MODIFY_SUCCESS] : result => ({attendModifySuccess : true}),
    [ENTER_SUCCESS] : result => ({enterSuccess : true}),
    [LEAVE_SUCCESS] : result =>({leaveSuccess : true}),
    [ATTEND_ADMIN_BY_TYPE] : result => ({attendAdminType : result.data})
});

/* 리듀서 */
export const attendReducer = handleActions({
    [MY_ATTEND] : (state, {payload}) => ({
        ...state,
        ...payload
    }),
    [TODAY_ATTEND] : (state, {payload}) => ({
        ...state,
        ...payload
    }),
    [ATTEND_ADMIN] : (state, {payload}) => payload,
    [ATTEND_MODIFY_SUCCESS] : (state,{payload})=>({
        ...state,
        ...payload
    }),
    [ENTER_SUCCESS] : (state,{payload}) => payload,
    [LEAVE_SUCCESS] : (state,{payload}) => payload,
    [ATTEND_ADMIN_BY_TYPE] : (state,{payload}) => payload,

},initialState)

