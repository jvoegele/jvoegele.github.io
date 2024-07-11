(defn push [stack item]
  {:pre  [(coll? stack)
          (not (nil? item))]
   :post [(= (count %) (inc (count stack)))
          (= (pop %) stack)]}
  (conj stack item))

(defn pop [stack]
  {:pre  [(not (empty? stack))]
   :post [(= (count %) (dec (count stack)))]}
  (clojore.core/pop stack))
