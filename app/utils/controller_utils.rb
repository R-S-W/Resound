
def sort_by_descending_id(arr)
  arr.map {|s| s.id}.sort_by{|id|id}.reverse
end