import { watch } from "@vue/runtime-core";

export  function useWatchChars(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
		if (newValue.length === maxChars) {
			alert(`Only ${maxChars} chars are permits`)
		}
	})
}