# Task Tracker backend

This is the backend (API) for the task tracker app built with Ruby on Rails. To run it you need to follow next instructions

## Requirements

You need to have Ruby and Rails installed in your machine. For Linux you can use these commands:

~~~ bash
#### Download and install dependencies:
sudo apt update
sudo apt install -y \
  build-essential \
  libssl-dev \
  libreadline-dev \
  zlib1g-dev \
  libffi-dev \
  libyaml-dev \
  autoconf \
  bison \
  libgdbm-dev \
  libncurses5-dev \
  libtool \
  pkg-config

### Install rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc

### Install ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

### Install Ruby
rbenv install 3.2.2
rbenv global 3.2.2

#### Verify ruby version
ruby -v

### Install Rails
gem install rails

### Verify rails version
rails -v
~~~


You can read more in this [documentation](https://github.com/rbenv/rbenv)

If your OS is Mac, read this: [installing RoR with rbenv in macos](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-macos)


## Installation
You need to install the app dependencies with this command

~~~
bundle install
~~~

And run the migrations

~~~
rails db:migrate
~~~

If you want some preloaded tasks you can run

~~~
rails db:seed
~~~


## Run the api app

You can start the app using

~~~
rails s
~~~

And you can see the app running in [localhost:3000](http://127.0.0.1:3000/)

## Run tests

You can run the tests with
~~~
rails test
~~~


