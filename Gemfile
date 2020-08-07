source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '6.0.0'
# Use postgres as the database for Active Record
gem 'pg', '~> 1.2.3'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

# json serialization
gem 'fast_jsonapi', '~> 1.5'
# pagination
gem 'pagy',  '~> 3.8'
# admin interface
gem 'rails_admin', '~> 2.0.2'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

# for JWT encoding
gem 'jwt', '~> 2.2'
# accept requests from  other origins
gem 'rack-cors', '~> 1.1'



# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

gem 'rswag-api'
gem 'rswag-ui'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 4.0', '>= 4.0.1'
  gem 'rswag-specs'
  gem 'faker', '~> 1.6', '>= 1.6.6'
  gem 'factory_bot_rails', '~> 6.1'
  gem 'pry-rails', '~> 0.3.9'
  gem 'pry-byebug', '~> 3.9'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
  gem 'database_cleaner-active_record', '~> 1.8'
  gem 'shoulda-matchers', '~> 4.0'
  gem 'shoulda-callback-matchers', '~> 1.1', '>= 1.1.4'
end
gem 'pronto', '~> 0.10.0'
gem 'pronto-rubocop', require: false

gem 'activerecord_json_validator', '~> 1.2'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
