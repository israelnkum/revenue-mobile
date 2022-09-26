import api from "../../utils/api";
import { allClaims, editClaim, newClaim, removeClaim } from "./ActionCreators";

/**
 * Store a newly created resource in storage.
 * @param claim
 * @returns {function(*): Promise<unknown>}
 */
export const addClaim = (claim) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post("/claims", claim).then((res) => {
      dispatch(newClaim(res.data));
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};

/**
 * Display a listing of the resource.
 * @returns {function(*): Promise<unknown>}
 */
export const getAllClaims = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get("/claims").then((res) => {
      dispatch(allClaims(res.data));
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};

/**
 * Update the specified resource in storage.
 * @param claim
 * @returns {function(*): Promise<unknown>}
 */
export const updateClaim = (claim) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().put(`/claims/${claim.id}`, claim).then((res) => {
      dispatch(editClaim(res.data));
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};

/**
 * Remove the specified resource from storage.
 * @param id
 * @returns {function(*): Promise<unknown>}
 */
export const deleteClaim = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().delete(`/claims/${id}`).then((res) => {
      dispatch(removeClaim(res.data.id));
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};
