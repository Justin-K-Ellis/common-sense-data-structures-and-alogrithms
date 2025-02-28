# 1.
# What is the Big O notation for an algorithm that takes 4N + 16 steps?
# 
# ANSWER: O(N). We disregard constants.
# 
#
# 2.
# What is the Big O notation for an algorithm that takes 2N^2 steps?
# 
# ANSWER: 0(N^2). Again, disregard the constants.
# 
#
# 3. 
# What is the time complexity of the following function?
def double_then_sum(array)
  double_array = []
  array.each do |number|
    double_array << number * 2
  end
  sum = 0
  double_array.each do |number|
    sum += number
  end
  return sum
end

# ANSWER: Strickly speaking, O(2N) since we loop through the array twice, but we can reduce this 
# notation to O(N).
# 
#
#4. What is the time complexity of the following function?
def multiple_cases(array)
  array.each do |string|
    puts string.upcase
    puts string.downcase
    puts string.capitalize
  end
end
# ANSWER: This is also O(N) (when ignore non-significant factors).
# 
#
# 5. What is the time complexity of the following function?
def every_other(array)
  array.each_with_index do |number, index|
    if index.even?
      array.each do |other_number|
        puts number + other_number
      end
    end
  end
end

nums = [1, 2, 3]
every_other(nums)
# ANSWER: O(N^2), since the function is effectively looping through the array twice.