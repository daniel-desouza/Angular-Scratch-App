package custom.dev.service.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

import custom.dev.service.filter.CustomFilter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
      throws Exception {
        auth
          .inMemoryAuthentication()
          .withUser("user")
          .password("password")
          .roles("USER");
    }

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.addFilterBefore(new CustomFilter(), ChannelProcessingFilter.class);
		httpSecurity.authorizeRequests()
			.antMatchers("/")
			.permitAll()
			.anyRequest()			
		    .permitAll()
			//.fullyAuthenticated()
			.and().httpBasic().and().csrf().disable();
		
	}

}