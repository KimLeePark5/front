
import {
    getEmployee, getEmployeeInfo,
    getEmployees, getSearchEmployee,
    postSuccess,
    putPwdReset,
    putRemoveSuccess,
    putSuccess,
} from "../modules/EmployeesModule";
import {authRequest} from "./Api";

export const callEmployeesListAPI = ({ currentPage = 1 }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/employees?page=${currentPage}`)

        if (result?.status === 200) {
            dispatch(getEmployees(result));
        }
    }
}

export const callEmployeesListRemoveAPI = ({employeeCode}) => {
    return async (dispatch, getState) => {
        console.log()
        const result = await authRequest.delete(`/api/v1/employees/${employeeCode}`)

        if (result?.status === 204) {
            dispatch(putRemoveSuccess())
            alert("삭제 완료")
        } else {
            alert("선택을 해야 삭제 할 수 있습니다.")
        }
    }
}

export const callRegistEmployeesAPI = ({ employeesCreateRequest }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.post(`/api/v1/employees`, employeesCreateRequest);

        if(result.status === 201) {
            dispatch(postSuccess());
        }

    }
};

export const callModifyEmployeesAPI = ({employeeCode, employeesUpdateRequest }) => {
    return async (dispatch, getState) => {

        const result = await authRequest.put(`/api/v1/employees/${employeeCode}`, employeesUpdateRequest);


        if(result.status === 201) {
            dispatch(putSuccess());
        }

    }
}

export const callEmployeeAPI =() => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/employee`)

        if(result?.status === 200){
            dispatch(getEmployee(result))
        }
    }
}

export const EmpSearchAPI = ({searchCategory, searchValue}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/employees/search?searchCategory=${searchCategory}&searchValue=${searchValue}`).catch(e=>{
            alert("검색실패");
            console.log(e);
            return;
        });

        if(result?.status === 200) {
            console.log(result?.data);
            dispatch(getEmployees(result))
        }
    }
}

export const callEmployeePwdReset = ({employeeCode})=>{
    return async (dispatch, getState) => {
        const result = await authRequest.put(`/api/v1/resetPwd/${employeeCode}`);
        if(result.status === 201) {
            dispatch(putPwdReset());
        }
    }
}


// export const callEmpoyeeRankHistory = ()=>{
//     return async (dispatch, getState)=>{
//         const result = await authRequest.post(`/api/v1/rankUpdate`);
//
//         if(result.status === 201){
//             dispatch(postRankHistorySuccess());
//         }
//     }
// }

export const callEmployeeInfoAPI = () => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/employee`)
        console.log(result)
        console.log("MainEEEM")

        if(result?.status === 200){
            dispatch(getEmployeeInfo(result))
        }
    }
}


