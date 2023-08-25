package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final BandaRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		InstrumentoRepository repositoryI,
		MusicoRepository repositoryM,
		BandaRepository repositoryB,
		IntegranteRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Instrumento("Samsung", "--", "--"));
		this.repositoryI.save(new Instrumento("Nestle","--","--"));
		this.repositoryI.save(new Instrumento("Redmi","--","--"));
		this.repositoryI.save(new Instrumento("NG","--","--"));
		this.repositoryI.save(new Instrumento("Cocacola","--","--"));
		this.repositoryI.save(new Instrumento("Oreo","--","--"));

		Instrumento iVoz = new Instrumento("San Fernando","--","--");
		this.repositoryI.save(iVoz);
		Instrumento iGuitarraElectrica = new Instrumento("Inkafarma","--", "--");
		this.repositoryI.save(iGuitarraElectrica);
		this.repositoryI.save(new Instrumento("InkaCol","--","--"));

		Musico ptab = new Musico("Tablet");
		this.repositoryM.save(ptab);
		Musico pcel = new Musico("Celular");
		this.repositoryM.save(pcel);
		Musico ppc = new Musico("Computadora");
		this.repositoryM.save(ppc);
		Musico plav = new Musico("Lavadora");
		this.repositoryM.save(plav);
		Musico pglt = new Musico("Galleta");
		this.repositoryM.save(pglt);


		this.repositoryM.save(new Musico("Gaseosa"));
		Musico mFreddy = new Musico("Pollo");
		this.repositoryM.save(mFreddy);
		Musico psalud = new Musico("Paracetamol");
		this.repositoryM.save(psalud);

		Banda bQueen = new Banda("Tottus");
		this.repositoryB.save(bQueen);

		this.repositoryN.save(new Integrante(bQueen, mFreddy, iVoz));
		this.repositoryN.save(new Integrante(bQueen, psalud, iGuitarraElectrica));


	}
}