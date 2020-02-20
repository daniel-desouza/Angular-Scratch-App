package custom.dev.service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

import custom.dev.service.filter.CustomFilter;
import custom.dev.service.security.JwtAuthEntryPoint;
import custom.dev.service.security.JwtAuthTokenFilter;
import custom.dev.service.services.UserDetailsServiceImpl;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
    UserDetailsServiceImpl userDetailsService;
 
    @Autowired
    private JwtAuthEntryPoint unauthorizedHandler;
 
    @Bean
    public JwtAuthTokenFilter authenticationJwtTokenFilter() {
        return new JwtAuthTokenFilter();
    }
 
    // @Override
    // public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
    //     authenticationManagerBuilder
    //             .userDetailsService(userDetailsService)
    //             .passwordEncoder(passwordEncoder());
    // }
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth)
      throws Exception {
        auth
          .inMemoryAuthentication()
          .withUser("user")
          .password("password")
          .roles("USER");
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
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