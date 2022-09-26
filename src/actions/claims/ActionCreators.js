import { Types } from "./Types";

/**
 * @param payload
 * @returns {{payload, type: string}}
 */
export function newClaim(payload) {
  return {
    type: Types.NEW_CLAIM,
    payload,
  };
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function allClaims(payload) {
  return {
    type: Types.ALL_CLAIMS,
    payload,
  };
}

/**
 *
 * @param id
 * @returns {{id, type: string}}
 */
export function removeClaim(id) {
  return {
    type: Types.DELETE_CLAIM,
    id,
  };
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function editClaim(payload) {
  return {
    type: Types.UPDATE_CLAIM,
    payload,
  };
}
