var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentResult, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn, _a;
import { D as DOCTORS_DATA, H as HOSPITALS_DATA, a as apiFetchDoctors, e as apiFetchHospitals, f as apiCreateAppointment, g as apiCancelAppointment, h as apiFetchAppointments } from "./api-CYf9rHFU.js";
import { u as useQuery } from "./useQuery-cq7-2WTq.js";
import { af as Subscribable, ag as shallowEqualObjects, ah as hashKey, ai as getDefaultState, aj as notifyManager, ak as useQueryClient, r as reactExports, al as noop, am as shouldThrowError } from "./index-BC5Mp0jx.js";
var MutationObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a2;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  reset() {
    var _a2;
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this);
  }
  mutate(variables, options) {
    var _a2;
    __privateSet(this, _mutateOptions, options);
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client).getMutationCache().build(__privateGet(this, _client), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client = new WeakMap(), _currentResult = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a2;
  const state = ((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state) ?? getDefaultState();
  __privateSet(this, _currentResult, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn = function(action) {
  notifyManager.batch(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult).variables;
      const onMutateResult = __privateGet(this, _currentResult).context;
      const context = {
        client: __privateGet(this, _client),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b = (_a2 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b.call(
            _a2,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult));
    });
  });
}, _a);
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function useAppointments(_patientId) {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: apiFetchAppointments,
    enabled: true
  });
}
function useDoctorAppointments(_doctorId) {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: apiFetchAppointments,
    enabled: true
  });
}
function useCreateAppointment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      const { patientId: _pid, patientName: _pname, ...rest } = data;
      return apiCreateAppointment(rest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    }
  });
}
function useCancelAppointment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => apiCancelAppointment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    }
  });
}
function useBookingWizard() {
  const [currentStep, setCurrentStep] = reactExports.useState(1);
  const [bookingData, setBookingData] = reactExports.useState({});
  const [doctorsList, setDoctorsList] = reactExports.useState(DOCTORS_DATA);
  const [hospitalsList, setHospitalsList] = reactExports.useState(
    HOSPITALS_DATA
  );
  reactExports.useState(() => {
    apiFetchDoctors().then(setDoctorsList).catch(() => {
    });
    apiFetchHospitals().then((h) => setHospitalsList(h)).catch(() => {
    });
  });
  const updateBooking = (data) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };
  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const goToStep = (step) => setCurrentStep(step);
  const reset = () => {
    setCurrentStep(1);
    setBookingData({});
  };
  const steps = [
    { step: 1, label: "Select Location", completed: !!bookingData.locationId },
    { step: 2, label: "Choose Hospital", completed: !!bookingData.hospitalId },
    {
      step: 3,
      label: "Select Department",
      completed: !!bookingData.department
    },
    { step: 4, label: "Choose Doctor", completed: !!bookingData.doctorId },
    {
      step: 5,
      label: "Pick Time Slot",
      completed: !!bookingData.date && !!bookingData.timeSlot
    },
    { step: 6, label: "Confirm Booking", completed: false }
  ];
  const selectedDoctor = doctorsList.find((d) => d.id === bookingData.doctorId);
  const selectedHospital = hospitalsList.find(
    (h) => h.id === bookingData.hospitalId
  );
  return {
    currentStep,
    bookingData,
    steps,
    selectedDoctor,
    selectedHospital,
    updateBooking,
    nextStep,
    prevStep,
    goToStep,
    reset
  };
}
export {
  useCreateAppointment as a,
  useAppointments as b,
  useCancelAppointment as c,
  useDoctorAppointments as d,
  useBookingWizard as u
};
