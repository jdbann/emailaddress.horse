class ChangelogGenerator < Jekyll::Generator
  safe true

  def generate(site)
    site.collections.each do |_, collection|
      collection.docs.each do |item|
        if item.data["changelog"]
          item.data["changes"] = item.data["changelog"].map do |change|
            change["title"] = item.data["title"]
            change
          end
        end
      end
    end
  end
end
