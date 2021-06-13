module HabitsByWeek
  def habits_by_week(input)
    sorted_habits = input.sort_by { |habit| habit["date"] }
    first_date = sorted_habits[0]["date"]
    last_date = [sorted_habits[-1]["date"], Date.today].max
    tracked_range = first_date..last_date
    beginning_of_range = first_date.prev_day(first_date.cwday - 1)
    end_of_range = last_date.next_day(7 - last_date.cwday)
    (beginning_of_range..end_of_range).map do |date|
      {
        "date" => date,
        "tracked" => tracked_range.include?(date),
        "did_habit" => !!sorted_habits.find { |habit| habit["date"] == date },
        "today" => date == Date.today
      }
    end.group_by { |habit_day| habit_day["date"].cweek }
  end
end

Liquid::Template.register_filter(HabitsByWeek)
