import Vue from "vue";
import {
  FactorsService,
} from "@/common/api.service";
import {
  FACTORS,
} from "./actions.type";
import {
    SET_FACTORS
} from "./mutations.type";

const initialState = {
  factors: {
    value: ""
  },
};

export const state = { ...initialState };

export const actions = {
  async [FACTORS](context) {
    const { data } = await FactorsService.get();
    context.commit(SET_FACTORS, data.factors);
    return data;
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_FACTORS](state, factors) {
    state.factors = factors;
  }

};

const getters = {
  factors(state) {
    return state.factors;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
